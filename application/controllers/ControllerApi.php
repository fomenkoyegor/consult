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
                throw new Exception('auth_fail');
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
                throw new Exception('auth_fail');


            $user = (int)ModuleTokenAuth::instance()->getUser($_POST['token'])['id'];
            $consults = ModuleDatabaseConnection::instance()
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
                throw new Exception('auth_fail');


            $user = (int)ModuleTokenAuth::instance()->getUser($_POST['token'])['id'];
            $groups = ModuleDatabaseConnection::instance()
                ->groups
                ->all();
            $res['groups'] = $groups;

        } catch (Exception $e) {
            $res = ['status' => 'fail'];
            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }

    public function action_getGroupStudent()
    {
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth_fail');
            if (empty((int)$_POST['group_id']))
                throw new Exception('not all params');

            $db = ModuleDatabaseConnection::instance();
            $res['students'] = $db
                ->students->where('group_id', '?')
                ->all([$_POST['group_id']]);


        } catch (Exception $e) {
            $res = ['status' => 'fail'];
            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }

    public function action_addExisttudent()
    {
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth_fail');
            if (empty((int)$_POST['student_id']))
                throw new Exception('not all params');

            $db = ModuleDatabaseConnection::instance();
            $user = ModuleTokenAuth::instance()->getUser($_POST['token']);
            $consult = $db->consults
                ->where("user_id", "?")
                ->andWhere("state", 0)
                ->first([$user["id"]]);
            if (empty($consult)) throw new Exception('consult not open');
            $db->visitors->insert([
                'consult_id' => (int)$consult['id'],
                'student_id' => (int)$_POST['student_id']
            ]);

        } catch (Exception $e) {
            if ($e->getMessage() === 'auth_fail') {
                $res = ['status' => 'auth_fail'];
            } else {
                $res = ['status' => 'fail'];
            }

            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }


    /**
     *
     */
    public function action_addStudent()
    {
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth_fail');
            if (empty($_POST['name'])
                || empty($_POST['surname'])
                || empty($_POST['group_id'])
                && empty($_POST['group_name']))
                throw new Exception('fields_empty');
            $db = ModuleDatabaseConnection::instance();

            $user = ModuleTokenAuth::instance()->getUser($_POST['token']);

            $consult = $db->consults
                ->where("user_id", "?")
                ->andWhere("state", 0)
                ->first([$user["id"]]);

            if (empty($consult)) throw new Exception('consult not open');

            try {
                $db->beginTran();


                if (empty($_POST['group_id'])) {
                    $group_id = $db->groups->insert(
                        ['name' => $_POST['group_name']]
                    );
                } else {
                    $group_id = $_POST['group_id'];
                }

                $student_id = $db->students->insert(
                    [
                        "name" => $_POST['name'],
                        "surname" => $_POST['surname'],
                        "group_id" => (int)$group_id
                    ]
                );

                $db->visitors->insert([
                    'consult_id' => (int)$consult['id'],
                    'student_id' => (int)$student_id
                ]);


                $db->commit();
            } catch (Exception $e) {
                $db->rollback();
                throw $e;
            }


        } catch (Exception $e) {
            if ($e->getMessage() === 'auth_fail') {
                $res = ['status' => 'auth_fail'];
            } else {
                $res = ['status' => 'fail'];
            }

            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }


    public function action_getStudentInConsult()
    {
        $res = ['status' => 'ok'];
        try {

            if (empty($_POST['token'])
                || !ModuleTokenAuth::instance()->isAuth($_POST['token']))
                throw new Exception('auth_fail');


            $db = ModuleDatabaseConnection::instance();
            $user = ModuleTokenAuth::instance()->getUser($_POST['token']);
            $consult = $db->consults
                ->where("user_id", "?")
                ->andWhere("state", 0)
                ->first([$user["id"]]);
            if (empty($consult)) throw new Exception('consult not open');
//            ################

            $students = ModuleDatabaseConnection::instance()
                ->students
                ->join('visitors', 'student_id')
                ->join('groups', 'id','group_id','students')
                ->where('visitors.consult_id', (int)$consult['id'])
                ->fields(['students.*',['groups.name','group']])
                ->all();

            $res['students'] = $students;

        } catch (Exception $e) {
            if ($e->getMessage() === 'auth_fail') {
                $res = ['status' => 'auth_fail'];
            } else {
                $res = ['status' => 'fail'];
            }

            $res['msg'] = $e->getMessage();
        }

        $this->response(json_encode($res));
    }


}






















