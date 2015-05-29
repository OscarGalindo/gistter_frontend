(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('tweetFactory', tweet);

    tweet.$inject = ['API', '$http', '$q'];

    /* @ngInject */
    function tweet(API, $http, $q) {
        var service = {
            tweet: tweet,
            create: create,
            get_by_id: get_by_id,
            reply: reply
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

        function reply(id_parent, body) {
            var q = $q.defer();

            var reply = {
                body: body,
                id_parent: id_parent
            };

            service.create(reply)
                .success(function(data) {
                    q.resolve(data);
                });

            return q.promise;
        }
    }
})();
