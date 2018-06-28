<?php
/**
 * Created by PhpStorm.
 * User: fomenkoyegor
 * Date: 29.06.2018
 * Time: 0:25
 */

class ControllerApi extends Controller
{
    public function __construct()
    {
        header('Access-Control-Allow-Origin:*');
    }


    public function action_openConsult()
    {
        $res = ['status' => 'ok'];

        try {

            $db = ModuleDatabaseConnection::instance();
            $auth = ModuleTokenAuth::instance();
            $token = $_POST['token'];
            $time = $_POST['time'];
            $user_id = $auth->getUser($token)['id'];

            if (empty($token) || $auth->isAuth($token))
                throw new Exception('auth fail');
            if (empty($time))
                throw new Exception('not all params');

            $db->consults->insert([
                'starttime'=>$time,
                'user_id'=>$user_id
            ]);

        } catch (Exception $e) {
            $res['msg']=$e->getMessage();
        }

        $this->response(json_encode($res));
    }
}