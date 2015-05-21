(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$scope', '$http', '$state', 'userFactory', 'flashmessageFactory'];

    /* @ngInject */
    function userCtrl($scope, $http, $state, User, Flashmessage) {
        $scope.user = {};
        $scope.flash_message = Flashmessage.getMessage();

        $scope.login = function () {
            var data = {
                "username": $scope.user.username,
                "password": $scope.user.password
            };

            User.login(data)
                .then(function (response) {
                    var jwt = response.data.token;
                    User.setToken(jwt, $scope.user.remember);
                    $state.go('timeline');
                });
        };

        $scope.signup = function () {
            var data = {
                "username": $scope.user.username,
                "email": $scope.user.email,
                "password": $scope.user.password,
                "confirmPassword": $scope.user.confirmPassword
            };

            User.signup(data)
                .then(function (response) {
                    var message = "Your registration was successful!!!";
                    Flashmessage.setMessage(message);
                    $state.go('login');
                });
        };
    }
})();
