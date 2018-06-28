<?php
/**
 * Created by PhpStorm.
 * User: fomenkoyegor
 * Date: 26.06.2018
 * Time: 17:55
 */

namespace ModuleAuth;


class UserTokenSession
{
    private $short, $long;
    private $current_session = null;
    private static $instance = null;
    const SESSION_KEY = "dsabdhavschj";

    public static function instance(): self
    {
        return self::$instance === null
            ? self::$instance = new self()
            : self::$instance;
    }

    private function __construct()
    {
        $config = \Config::load("user_session");
        $this->short = $config->short;
        $this->long = $config->long;
    }

    private static function getIp(): string
    {
        return md5($_SERVER["REMOTE_ADDR"]);
    }

    private static function getAgent(): string
    {
        return md5($_SERVER["HTTP_USER_AGENT"]);
    }

    private static function getToken(int $id): string
    {
        return \ModuleHash::getPassHasher()->passHash($id . self::getAgent() . self::getIp());
    }

    public function createSession(int $id, bool $long = false): string
    {
        $time = $long ? $this->long : $this->short;
        $token = self::getToken($id);
        $session_data = [
            "user_agent" => self::getAgent(),
            "user_ip" => self::getIp(),
            "user_id" => $id,
            "token" => $token,
            "expires" => $time + time(),
            "created" => time()
        ];
        \ModuleDatabaseConnection::instance()->user_tokens->insert($session_data);
        return $token;
    }

    public function validateSession(string $token): bool
    {
        if ($this->current_session !== null) return !empty($this->current_session);
        if (empty($token)) return false;
        $this->current_session = \ModuleDatabaseConnection::instance()
            ->user_tokens
            ->where("token", $token)
            ->first();
        if (empty($this->current_session)) return false;
        if ($this->current_session["user_ip"] !== self::getIp()) return false;
        if ($this->current_session["user_agent"] !== self::getAgent()) return false;
        if (time() > $this->current_session["expires"]) return false;
        if (time() > $this->current_session["expires"]
            - ($this->current_session["expires"] - $this->current_session["created"]) / 2) $this->continueSession($token);
        return true;
    }

    public function getUserIdFromSession(string $token): int
    {
        if (!$this->validateSession($token)) throw new \Exception("SESSION DOES NOT EXISTS");
        return (int)$this->current_session["user_id"];
    }

    private function _destroySession(bool $deep)
    {
        if (!$deep) {
            \ModuleDatabaseConnection::instance()
                ->user_tokens
                ->deleteById($this->current_session['id']);
            \ModuleDatabaseConnection::instance()
                ->user_tokens
                ->deleteWhere("id=? AND expires<?", [$this->current_session['id'], time()]);

        } else {
            \ModuleDatabaseConnection::instance()
                ->user_tokens
                ->deleteWhere("user_id=?", [$this->current_session['user_id']]);

        }
    }

    public function destroySession(string $token, bool $deep = false)
    {
        if (!$this->validateSession($token)) return ;
        $this->_destroySession($deep);
    }

    public function continueSession(string $token)
    {

        $id = (int)$this->current_session["id"];
        $time = $this->current_session["expires"] - $this->current_session["created"];
        \ModuleDatabaseConnection::instance()
            ->user_tokens
            ->updateById($id, [
                "expires" => time() + $time,
                "created" => time()
            ]);

    }
}