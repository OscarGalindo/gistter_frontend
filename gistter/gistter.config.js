(function () {
    'use strict';

    angular
        .module('gistter')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'jwtInterceptorProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {
        //jwtInterceptorProvider.tokenGetter = function () {
        //    return localStorage.getItem('token');
        //};
        //$httpProvider.interceptors.push('jwtInterceptor');

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('timeline', {
                url: '/',
                templateUrl: 'gistter/timeline/timeline.html',
                controller: 'timelineCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'gistter/user/login.html',
                controller: 'userCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'gistter/user/signup.html',
                controller: 'userCtrl'
            })
            .state('logout', {
                url: '/logout',
                controller: 'userCtrl'
            })
    }

})();
