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
        header('Access-Control-Allow-Credentials: true');
        header("Access-Control-Allow-Headers: *");
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    }


    /**
     * @throws Exception
     */
    public function action_openConsult()
    {
        $res = ['status' => 'ok'];

//        try {
//
//
//            if (empty($_POST['token']) || ModuleTokenAuth::instance()->isAuth($_POST['token'])) {
//
//                ModuleDatabaseConnection::instance()->consults->insert([
//                    'starttime' => $_POST['time'],
//                    'user_id' => ModuleTokenAuth::instance()->getUser($_POST['token'])['id']
//                ]);
//            } else {
//                throw new Exception('auth fail');
//            }
//
//
//            if (empty($_POST['time']))
//                throw new Exception('not all params');
//
//
//        } catch (Exception $e) {
//            $res['msg'] = $e->getMessage();
//        }

//        $user_id = ModuleTokenAuth::instance()->getUser($_POST['token'])['id'];
//        $consults = ModuleDatabaseConnection::instance()->consults->all();
//        $res['user_id'] = $user_id;
//        $res['time'] = $_POST['time'];
//        $res['consults'] = $consults;
//        ModuleDatabaseConnection::instance()->consults->insert([
//            "starttime"=>$_POST["time"],
//            "user_id"=>$user_id
//        ]);
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth fail');
            if (empty($_POST['time']))
                throw new Exception('not all params');
            ModuleDatabaseConnection::instance()->consults->insert([
                'starttime' => $_POST['time'],
                'user_id' => ModuleTokenAuth::instance()->getUser($_POST['token'])['id']
            ]);

        } catch (Exception $e) {
            $res = ['status' => 'fail'];
            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }

    /**
     *
     */
    public function action_hasConsult()
    {
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth fail');


            $user = (int) ModuleTokenAuth::instance()->getUser($_POST['token'])['id'];
            $consults= ModuleDatabaseConnection::instance()
                ->consults
                ->where('user_id', $user)
                ->andWhere('state', 0)
                ->all();
            $res['consults'] = $consults;

        } catch (Exception $e) {
            $res = ['status' => 'fail'];
            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }


    public function action_getGroups()
    {
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth fail');


            $user = (int) ModuleTokenAuth::instance()->getUser($_POST['token'])['id'];
            $groups= ModuleDatabaseConnection::instance()
                ->groups
                ->all();
            $res['groups'] = $groups;

        } catch (Exception $e) {
            $res = ['status' => 'fail'];
            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }






}