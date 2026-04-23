/*----------  LIBRARIES  ----------*/

//=include ./lib/angular.js
//=include ./lib/angular-route.js


/*----------  APP  ----------*/

(function() {

    'use strict';
    angular.module('app', ['ngRoute']);
    //=include ./app/config.js
    //=include ./app/ctrl/main.js

}());