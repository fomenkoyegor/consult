<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 21.03.2018
 * Time: 13:24
 */

class ControllerMain extends Controller
{

    public function __construct()
    {

    }


    public function action_index()
    {

        $view = new View("main");
        $view->useTemplate();
        $this->response($view);

    }



}