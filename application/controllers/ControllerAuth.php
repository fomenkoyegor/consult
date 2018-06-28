<?php

class ControllerAuth extends Controller
{
    public function __construct()
    {
        header('Access-Control-Allow-Origin:*');
    }

    private static function is_empty()
    {
        foreach (func_get_args() as $arg) {
            if (empty($arg)) return true;
        }
        return false;
    }

    public function action_register()
    {

        $response = ['status' => 'ok'];
        try {
            $login = @$_POST["login"];
            $pass = @$_POST["pass"];


            if (self::is_empty($login, $pass)) throw new Exception("enter all fields");

            try {
                ModuleTokenAuth::instance()->register($login, $pass);

            } catch (Exception $e) {
                throw new Exception("This login is already used");
            }
        } catch (Exception $e) {

            $response['status'] = 'fail';
            $response['message'] = $e->getMessage();
        }
        $this->response(json_encode([
            'msg' => $response
        ]));
    }

    public function action_login()
    {
        $response = ['status' => 'ok'];
        try {
            $login = @$_POST["login"];
            $pass = @$_POST["pass"];

            if (empty($login) || empty($pass)) throw new Exception("incorect data");
            $response['token'] = ModuleTokenAuth::instance()->login($login, $pass);

        } catch (Exception $e) {
            $response['status'] = 'fail';
            $response['message'] = $e->getMessage();
        }
        $this->response(json_encode($response));
    }

    public function action_logout()
    {
        $response = ['status' => 'ok'];
        try {
            $token = @$_POST["token"];


            if (empty($token)) throw new Exception("incorect data");
            ModuleTokenAuth::instance()->logout($token);

        } catch (Exception $e) {
            $response['status'] = 'fail';
            $response['message'] = $e->getMessage();
        }

        $this->response(json_encode($response));
    }

    public function action_logoutAll()
    {
        ModuleAuth::instance()->logout(true);
        $this->redirect(URLROOT);
    }
}