// const remote = require('electron').remote;
// const main = remote.require('./app.js');
//
// var button = document.createElement('button')
// button.textContent='Open Window';
// button.addEventListener('click',() => {
//     var window=remote.getCurrentWindow();
//     main.openWindow('about');
//     window.close();
//     },false)
// document.body.appendChild(button)

//Angular code
//=================================================================

var app = angular.module('first-app',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/',{
        templateUrl:"about.html"
        })
        .when('/about',{
            templateUrl:'about.html'
        });
})