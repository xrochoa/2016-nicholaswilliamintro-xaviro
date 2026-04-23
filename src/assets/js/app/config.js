angular.module('app').config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'mainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

});