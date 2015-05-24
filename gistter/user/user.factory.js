(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['API', '$localStorage', '$sessionStorage', 'jwtHelper', '$http'];

    /* @ngInject */
    function userFactory(API, $localStorage, $sessionStorage, jwtHelper, $http) {
        var $local = $localStorage;
        var $session = $sessionStorage;
        var user = {
            token: $local.jwt || $session.jwt,
            getUsername: getUsername,
            setToken: setToken,
            getToken: getToken,
            isAuth: isAuth,
            logout: logout,
            login: login,
            signup: signup
        };

        return user;

        ////////////////

        function login(data) {
            return $http.post(API.url + 'auth', data);
        }

        function signup(data) {
            return $http.post(API.url + 'user/', data);
        }

        function getUsername() {
            if (user.token != null || user.token != undefined) {
                return jwtHelper.decodeToken(user.token).username
            }
        }

        function setToken(jwt, remember) {
            angular.extend(user, {token: jwt});
            if (remember) $local.jwt = jwt;
            else $session.jwt = jwt;
        }

        function getToken() {
            return $local.jwt || $session.jwt || '';
        }

        function isAuth() {
            return (user.token != null)
        }

        function logout() {
            user.token = null;
            $local.$reset();
            $session.$reset();
        }

    }
})();
