(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope', '$state', 'userFactory'];

    function headerCtrl($scope, $state, User) {
        /* jshint validthis: true */
        var vm = this;

        vm.isauth = User.isAuth;
        vm.username = User.getUsername;
        vm.profile_image = User.getProfileImage;
        vm.searcher = {};

        $scope.logout = function () {
            User.logout();
            $state.go('login');
        }
    }
})();
