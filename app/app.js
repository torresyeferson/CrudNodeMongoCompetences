(function() {
    'use strict';

    angular.module('app', [
            "ui.router",
            "ngStorage"
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("login", {
                url: "/login",
                templateUrl: "/views/user/login.html",
                controller: "loginController"
            }).state("logout", {
                url: "/logout",
                templateUrl: "/views/user/logout.html",
                controller: "logoutController"
            }).state("home", {
                url: "/home",
                templateUrl: "/views/user/home.html",
            }).state("users", {
                url: "/",
                templateUrl: "/views/user/index.html",
                controller: "userController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("instrumentos", {
                url: "/",
                templateUrl: "/views/instrumento/index.html",
                controller: "instrumentoController"
            }).state("createIn", {
                url: "/createIn",
                templateUrl: "/views/instrumento/create.html",
                controller: "instrumentoController"
            }).state("editIn", {
                url: "/editIn/:id",
                templateUrl: "/views/instrumento/create.html",
                controller: "instrumentoController"
            })
            .state("details", {
                url: "/details/:id",
                templateUrl: "/views/user/details.html",
                controller: "userController"
            }).state("estudiante", {
                url: "/estudiante",
                templateUrl: "/views/alumno/home.html",
                controller: "userController"
            }).state("simular", {
                url: "/simular",
                templateUrl: "/views/simulator/page.html",
                controller: "simuladorController"
            }).state("contactos", {
                url: "/contactos",
                templateUrl: "/views/simulator/contactos/page.html",
                controller: "simuladorController"
            });
        })
        .constant("globalConfig", {
            userApi: 'https://digitalcompetences.herokuapp.com/api/user/',
            indicadorApi: 'https://digitalcompetences.herokuapp.com/api/indicador/',
            userLoginApi: 'https://digitalcompetences.herokuapp.com/api/user/login'
        }).run(run);

    run.$inject = ['$rootScope','$localStorage'];

    function run($rootScope, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.userData) {
                $rootScope.userLogin = true;
                if($localStorage.userData.role === 'Admin') $rootScope.isAdmin = true;
            }else {
                 $rootScope.userLogin = false;
                 $rootScope.isAdmin = false;
            }
    }
})();