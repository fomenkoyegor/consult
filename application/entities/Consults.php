<?php
/**
 * Created by PhpStorm.
 * User: fomenkoyegor
 * Date: 29.06.2018
 * Time: 0:21
 */

namespace Entity;


class Consults
{
    public $id, $starttime, $user_id, $state;

    public function __construct(int $time= 0, int $user_id = 0)
    {
        $this->starttime = $time;
        $this->user_id = $user_id;
    }


    public static function fromAssocies(array $array): array
    {
        return self::_fromAssocies($array, self::class);
    }
}