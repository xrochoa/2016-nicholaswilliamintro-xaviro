angular.module('app').config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: './views/index.html',
            controller: 'mainCtrl'
        })
        .when('/shop', {
            templateUrl: './views/shop.html',
            controller: 'shopCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);



});