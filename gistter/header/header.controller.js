(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope', '$state', 'localStorageService', 'userFactory'];

    /* @ngInject */
    function headerCtrl($scope, $state, localStorageService, User) {
        /* jshint validthis: true */
        var vm = this;

        vm.isauth = User.isAuth;
        vm.username = User.getUsername;

        $scope.logout = function () {
            User.logout();
            $state.go('login');
        }
    }
})();
