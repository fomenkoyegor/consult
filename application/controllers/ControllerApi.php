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


    /**
     * @throws Exception
     */
    public function action_openConsult()
    {
        $res = ['status' => 'ok'];

        try {


            if (empty($_POST['token']) || ModuleTokenAuth::instance()->isAuth($_POST['token'])) {

                ModuleDatabaseConnection::instance()->consults->insert([
                    'starttime' => $_POST['time'],
                    'user_id' => ModuleTokenAuth::instance()->getUser($_POST['token'])['id']
                ]);
            } else {
                throw new Exception('auth fail');
            }


            if (empty($_POST['time']))
                throw new Exception('not all params');


        } catch (Exception $e) {
            $res['msg'] = $e->getMessage();
        }

        $user_id = ModuleTokenAuth::instance()->getUser($_POST['token'])['id'];
        $consults = ModuleDatabaseConnection::instance()->consults->all();
        $res['user_id'] = $user_id;
        $res['time'] = $_POST['time'];
        $res['consults'] = $consults;
//        ModuleDatabaseConnection::instance()->consults->insert([
//            "starttime"=>$_POST["time"],
//            "user_id"=>$user_id
//        ]);

        $this->response(json_encode($res));
    }
}