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
            create: create
        };

        return service;

        ////////////////

        function tweet() {
        }

        function create(data) {
            return $http.post(API.url + 'tweet/', data);
        }
    }
})();
