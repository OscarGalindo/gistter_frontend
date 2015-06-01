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
            reply: reply,
            remove: remove
        };

        return service;

        ////////////////

        function remove(id) {
            return $http.delete(API.url + 'tweet/' + id);
        }

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
                .then(function(data) {
                    q.resolve(data);
                }, function() {
                    q.reject('error');
                });

            return q.promise;
        }
    }
})();
