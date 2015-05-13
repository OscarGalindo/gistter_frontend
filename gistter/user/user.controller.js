(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('userCtrl', userCtrl);

    userCtrl.$inject = ['$scope', '$http', '$state', 'userFactory'];

    /* @ngInject */
    function userCtrl($scope, $http, $state, User) {
        $scope.user = {};

        $scope.login = function() {
            var data = {
                "username": $scope.user.username,
                "password": $scope.user.password
            };
            $http.post('http://localhost:5000/auth', data)
                .then(function(response) {
                    var jwt = response.data.token;
                    User.setToken(jwt);
                    $state.go('home');
                });
        };
    }
})();
