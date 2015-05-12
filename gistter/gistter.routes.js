(function () {
    'use strict';

    angular
        .module('gistter')
        .run(run)
        .config(config);

    run.$inject = ['$rootScope', '$state', '$stateParams'];
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function run($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: 'Selecciona una opción.'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'gistter/partials/login.html'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'gistter/partials/signup.html'
            })
    }

})();
