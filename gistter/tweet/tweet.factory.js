(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('tweetFactory', tweet);

    tweet.$inject = ['API', '$http'];

    /* @ngInject */
    function tweet(API, $http) {
        var service = {
            tweet: tweet,
            create: create,
            get_by_id: get_by_id
        };

        return service;

        ////////////////

        function tweet() {
        }

        function create(data) {
            return $http.post(API.url + 'tweet/', data);
        }

        function get_by_id(id) {
            return $http.get(API.url + 'tweet/' + id);
        }
    }
})();
