(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$scope', '$state', 'userFactory', 'flashmessageFactory'];

    /* @ngInject */
    function userCtrl($scope, $state, User, Flashmessage) {
        $scope.user = {};
        $scope.is_auth = User.isAuth();

        $scope.login = function () {
            var data = {
                "username": $scope.user.username,
                "password": $scope.user.password
            };

            User.login(data)
                .success(function (response) {
                    var jwt = response.token;
                    User.setToken(jwt, $scope.user.remember);
                    $state.go('timeline');
                })
                .error(function() {
                    var message = "Login failed. Try again.";
                    Flashmessage.setMessage(message, 'danger');
                    $state.reload();
                });
        };

        $scope.signup = function () {
            if($scope.user.password != $scope.user.confirmPassword) {
                Flashmessage.setMessage('Las contraseñas deben ser diferentes', 'danger');
                $state.reload();
            }

            var data = {
                "username": $scope.user.username,
                "email": $scope.user.email,
                "password": $scope.user.password,
                "name": $scope.user.name,
                "lastname": $scope.user.lastname
            };

            User.signup(data)
                .success(function () {
                    var message = "Your registration was successful!";
                    Flashmessage.setMessage(message, 'success');
                    $state.go('login');
                })
                .error(function(resp) {
                    for(var id in resp.errors) {
                        Flashmessage.setMessage(resp.errors[id], 'danger');
                    }
                    $state.reload();
                });
        };
    }
})();
