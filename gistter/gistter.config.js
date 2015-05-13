(function () {
    'use strict';

    angular
        .module('gistter')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'jwtInterceptorProvider', 'localStorageServiceProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider, localStorageServiceProvider) {
        //jwtInterceptorProvider.tokenGetter = function () {
        //    return localStorage.getItem('token');
        //};
        //$httpProvider.interceptors.push('jwtInterceptor');

        localStorageServiceProvider.setPrefix('gistter');

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                template: 'Timeline.',
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
