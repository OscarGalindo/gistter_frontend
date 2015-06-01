(function () {
    'use strict';

    angular
        .module('gistter')
        .constant('API', {
            url: 'http://gistter.me/api/'
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
            .state('tag', {
                url: '/tag/:tag',
                templateUrl: 'gistter/tag/tag_layout.html',
                controller: 'tagCtrl',
                resolve: {
                    tag: ['$stateParams', 'tagFactory', function ($stateParams, tagFactory) {
                        return tagFactory.get_by_tag($stateParams.tag);
                    }]
                }
            })
            .state('search', {
                url: '/search/:text',
                templateUrl: 'gistter/profile/list_users.html',
                controller: 'searchCtrl',
                resolve: {
                    users: ['$stateParams', 'headerFactory', function ($stateParams, headerFactory) {
                        return headerFactory.search($stateParams.text);
                    }]
                }
            })
            .state('tweet', {
                url: '/:username/:id',
                templateUrl: 'gistter/tweet/tweet_layout.html',
                controller: 'tweetCtrl',
                resolve: {
                    tweet: ['$stateParams', 'tweetFactory', function ($stateParams, tweetFactory) {
                        return tweetFactory.get_by_id($stateParams.id);
                    }]
                }
            })
            .state('timeline', {
                url: '/',
                templateUrl: 'gistter/timeline/timeline.html',
                controller: 'timelineCtrl',
                resolve: {
                    timelineData: ['userFactory', 'timelineFactory', function (userFactory, timelineFactory) {
                        if(userFactory.isAuth() === false) {
                            return false;
                        }
                        return timelineFactory.getTL();
                    }]
                }
            })
            .state('404', {
                templateUrl: 'gistter/common/404.html'
            })
            .state('profile', {
                url: '/:username',
                templateUrl: 'gistter/profile/profile.html',
                controller: 'profileCtrl',
                resolve: {
                    userProfile: ['$stateParams', 'profileFactory', function ($stateParams, profileFactory) {
                        return profileFactory.get($stateParams.username);
                    }]
                }
            })
    }

})();
