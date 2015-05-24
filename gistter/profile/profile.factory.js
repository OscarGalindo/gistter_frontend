(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('profileFactory', profile);

    profile.$inject = ['API', '$http'];

    /* @ngInject */
    function profile(API, $http) {
        var profile = {
            get: get()
        };

        return profile;

        ////////////////

        function get(username) {
            return $http.get(API.url + 'user/' + username);
        }
    }
})();
