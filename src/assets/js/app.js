/*----------  LIBRARIES  ----------*/

//=include ./lib/angular.js
//=include ./lib/angular-route.js


/*----------  CUSTOM JS  ----------*/

(function() {

    'use strict';
    angular.module('app', ['ngRoute']);
    //=include ./app/ctrl/main.js
    //=include ./app/ctrl/shop.js
    //=include ./app/config.js


}());