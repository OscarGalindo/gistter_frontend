(function () {
    'use strict';

    angular
        .module('gistter')
        .directive('tweet', tweet);

    tweet.$inject = ['$filter', 'userFactory'];

    function tweet($filter, userFactory) {
        return {
            restrict: 'E',
            templateUrl: '/gistter/tweet/tweet.html',
            scope: {
                tweetData: '='
            },
            link: function (scope) {
                scope.profile_from_user = (userFactory.getUsername() == scope.tweetData.user.username);
                scope.tweetData.body = $filter('linkify')(scope.tweetData.body, scope.tweetData.hashtags);
            }
        }
    }
})();
