(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['localStorageService', 'jwtHelper'];

    /* @ngInject */
    function userFactory(localStorageService, jwtHelper) {
        var user = {
            token: localStorageService.get('jwt'),
            getUsername: getUsername,
            setToken: setToken,
            isAuth: isAuth,
            logout: logout
        };

        return user;

        ////////////////

        function getUsername() {
            if(user.token != null || user.token != undefined) {
                return jwtHelper.decodeToken(user.token).username
            }
        }

        function setToken(jwt) {
            angular.extend(user, {token: jwt});
            localStorageService.set('jwt', jwt);
        }

        function isAuth() {
            return (user.token != null)
        }

        function logout() {
            user.token = null;
            localStorageService.remove('jwt');
        }
    }
})();
