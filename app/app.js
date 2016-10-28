'use strict';

angular.module('myApp', [
    'ngCookies',
    'ui.router',
    'myAppConfig',
    'angular-google-gapi',
    'modInbox',
    'dtvLetter-toggle',
    'dtvLazy-load'
]).
config([
    "$httpProvider",
    "$urlRouterProvider",
    function ($httpProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get("$state");
            $state.go("inbox.list");
        });
    }]).
run(['$state', '$rootScope', '$window', '$cookies', 'GAuth', 'GApi', 'GData', 'API_SETTINGS',
    function ($state, $rootScope, $window, $cookies, GAuth, GApi, GData, API_SETTINGS) {
        $rootScope.gdata = GData;

        var CLIENT_ID = API_SETTINGS.CLIENT_ID;
        var BASE = API_SETTINGS.BASE;
        var SCOPES = API_SETTINGS.SCOPES;

        GAuth.setClient(CLIENT_ID);
        GAuth.setScope(SCOPES);
        GApi.load('gmail', 'v1');
        GAuth.load();

        GAuth.checkAuth().then(
            function (user) {
                console.log(user.name + 'is login');
                $state.go('inbox.list'); // an example of action if it's possible to
                // authenticate user at startup of the application
            }
        );

        var currentUser = $cookies.get('userId');
        if(currentUser) {
            GData.setUserId(currentUser);
            GAuth.checkAuth().then(
                function () {
                    if($state.includes('inbox.list'))
                        $state.go('inbox.list');
                }
            );
        }

        $rootScope.logout = function() {
            GAuth.logout().then(function () {
                $cookies.remove('userId');
            });
        };
    }

]).
    controller("myApp.ctrlMain", [
        "$scope",
        "$rootScope",
        "$state",
        function($scope, $rootScope, $state) {
            $scope.$state = $state;
        }]);