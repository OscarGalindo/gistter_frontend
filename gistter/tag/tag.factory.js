(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('tagFactory', tagFactory);

    tagFactory.$inject = ['API', '$http'];

    /* @ngInject */
    function tagFactory(API, $http) {
        var service = {
            get_by_tag: get_by_tag
        };

        return service;

        ////////////////

        function get_by_tag(tag) {
            return $http.get(API.url + 'tag/' + tag);
        }
    }
})();
