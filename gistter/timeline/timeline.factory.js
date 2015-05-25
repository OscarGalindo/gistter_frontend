(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('timelineFactory', timeline);

    timeline.$inject = ['API', '$http'];

    /* @ngInject */
    function timeline(API, $http)
    {
        var service = {
            getTL: getTL
        };

        return service;

        ////////////////

        function getTL() {
            return $http.get(API.url + 'timeline/')
        }
    }
})();
