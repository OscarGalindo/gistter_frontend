(function () {
    'use strict';

    angular
        .module('gistter')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/')

        $stateProvider
            .state('home', {
                url: '/',
                template: 'Timeline.'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'gistter/partials/login.html',
                controller: 'authCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'gistter/partials/signup.html',
                controller: 'userCtrl'
            })
    }

})();
