var app = angular.module('first-app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){

    $routeProvider
        .when('/',{
        templateUrl:"about.html"
        })
        .when('/about',{
            templateUrl:'about.html'
        });
}])