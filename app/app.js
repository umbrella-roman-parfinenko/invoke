'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myAppConfig',
  'myApp.inbox',
  'myApp.letter-toggle',
  'myApp.lazy-load'
]).
run(['$rootScope',
  function($rootScope) {
    var CLIENT = 'yourGoogleAuthAPIKey';
    var BASE = 'https://myGoogleAppEngine.appspot.com/_ah/api';

  }
]);
