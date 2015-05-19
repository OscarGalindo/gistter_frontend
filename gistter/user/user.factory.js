(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['$localStorage', '$sessionStorage', 'jwtHelper', '$http', '$rootScope'];

    /* @ngInject */
    function userFactory($localStorage, $sessionStorage, jwtHelper, $http, $rootScope) {
        var API = 'http://localhost:5000/';
        var queue = [];
        var currentMessage = "";
        $rootScope.$on("$routeChangeSuccess", function() {
            currentMessage = queue.shift() || "";
        });

        var $local = $localStorage;
        var $session = $sessionStorage;
        var user = {
            token: $local.jwt || $session.jwt,
            getUsername: getUsername,
            setToken: setToken,
            isAuth: isAuth,
            logout: logout,
            login: login,
            signup: signup,
            setMessage: setMessage,
            getMessage: getMessage
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
            if (remember) $local.jwt = jwt;
            else $session.jwt = jwt;
        }

        function isAuth() {
            return (user.token != null)
        }

        function logout() {
            user.token = null;
            $local.$reset();
            $session.$reset();
        }

        function setMessage(message) {
            queue.push(message);
        }

        function getMessage() {
            return currentMessage;
        }
    }
})();
