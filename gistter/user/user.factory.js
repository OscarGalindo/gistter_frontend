(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$localStorage', '$sessionStorage', 'jwtHelper', '$http'];

    /* @ngInject */
    function userFactory($localStorage, $sessionStorage, jwtHelper, $http) {
        var API = 'http://localhost:5000/';
        var user = {
            token: $localStorage.jwt,
            getUsername: getUsername,
            setToken: setToken,
            isAuth: isAuth,
            logout: logout,
            login: login,
            signup: signup
        };

        return user;

        ////////////////

        function login(data) {
            return $http.post(API + 'auth', data);
        }

        function signup(data) {
            return $http.post(API + 'user/', data);
        }

        function getUsername() {
            if (user.token != null || user.token != undefined) {
                return jwtHelper.decodeToken(user.token).username
            }
        }

        function setToken(jwt, remember) {
            angular.extend(user, {token: jwt});
            if (remember) $localStorage.jwt = jwt;
            else $sessionStorage.jwt = jwt;
        }

        function isAuth() {
            return (user.token != null)
        }

        function logout() {
            user.token = null;
            $localStorage.$reset();
            $sessionStorage.$reset();
        }
    }
})();
