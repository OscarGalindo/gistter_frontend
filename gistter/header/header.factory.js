(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('headerFactory', headerFactory);

    headerFactory.$inject = ['$http', 'API'];

    /* @ngInject */
    function headerFactory($http, API) {
        var headerFactory = {
            search: search
        };

        return headerFactory;

        ////////////////

        function search(text) {
            return $http.get(API.url + 'search/' + text);
        }
    }
})
();
