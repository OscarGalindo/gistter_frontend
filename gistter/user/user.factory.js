(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('userFactory', userFactory);

    userFactory.$inject = ['localStorageService'];

    /* @ngInject */
    function userFactory(localStorageService)
    {
        var user = {
            token: localStorageService.get('jwt'),
            setToken: setToken,
            isAuth: isAuth
        };

        return user;

        ////////////////

        function setToken(jwt) {
            user.token = jwt;
            localStorageService.set('jwt', jwt);
        }

        function isAuth() {
            return (user.token != null)
        }
    }
})();
