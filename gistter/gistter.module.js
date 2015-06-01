(function () {
    'use strict';

    angular
        .module('gistter', ['ui.router', 'angular-jwt', 'ngStorage', 'picardy.fontawesome', 'ngSanitize', 'angularMoment', 'ngAnimate'])
        .run(['$rootScope', '$state', function($rootScope, $state) {
            $rootScope.$on('$stateChangeError', function() {
                $state.go('404');
            });
        }]);
})();
