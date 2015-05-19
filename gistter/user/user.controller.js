(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$scope', '$http', '$state', 'userFactory'];

    /* @ngInject */
    function userCtrl($scope, $http, $state, User) {
        $scope.user = {};

        $scope.login = function () {
            var data = {
                "username": $scope.user.username,
                "password": $scope.user.password
            };

            User.login(data)
                .then(function (response) {
                    var jwt = response.data.token;
                    User.setToken(jwt, $scope.user.remember);
                    $state.go('home');
                });
        };

        $scope.signup = function () {
            var data = {
                "username": $scope.user.username,
                "email": $scope.user.email,
                "password": $scope.user.password,
                "confirmPassword": $scope.user.confirmPassword
            };

            User.signup(data).
                then(function (response) {
                    console.log(response);
                    $state.go('login');
                });
        };
    }
})();
