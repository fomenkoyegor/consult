<?php
defined("DOCROOT") or die ("NO DIRECT ACCESS");
include CLASS_PATH . "Config.php";
include CLASS_PATH . "Router.php";
include CLASS_PATH . "View.php";
include CLASS_PATH . "Model.php";
include CLASS_PATH . "Entity.php";
include CLASS_PATH . "AutoLoader.php";
session_start();
spl_autoload_register("Autoloader::load");
$router = Router::getInstance();

$router->addRoute(new Route("",
    [
        "controller" => "main",
        "action" => "index"
    ]));



// TODO api

$router->addRoute(new Route("auth/{action}",[
    "controller" => "auth"
]));
$router->addRoute(new Route("api/{action}",[
    "controller" => "api"
]));
// TODO api

try {
    $router->run();
} catch (RouterException $exception) {
    $router->redirect404();
    echo $exception->getMessage();
};
