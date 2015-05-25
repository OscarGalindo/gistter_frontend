(function () {
    'use strict';

    angular
        .module('gistter')
        .constant('API', {
            url: 'http://localhost:5000/'
        })
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'jwtInterceptorProvider', 'userFactoryProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider, User) {
        jwtInterceptorProvider.tokenGetter = function () {
            return User.$get().getToken();
        };
        $httpProvider.interceptors.push('jwtInterceptor');

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
            .state('profile', {
                url: '/:username',
                templateUrl: 'gistter/profile/user.html',
                controller: 'profileCtrl',
                resolve: {
                    userProfile: function ($stateParams, profileFactory) {
                        return profileFactory.get($stateParams.username);
                    }
                }
            })
    }

})();
