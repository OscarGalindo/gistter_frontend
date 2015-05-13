(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('authCtrl', authController);

    authController.$inject = ['$scope'];

    /* @ngInject */
    function authController($scope)
    {
        $scope.login = function() {
            console.log('Do Login!');
        }
    }
})();
