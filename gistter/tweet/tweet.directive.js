(function () {
    'use strict';

    angular
        .module('gistter')
        .directive('tweet', tweet);

    tweet.$inject = ['$state', '$filter', 'userFactory', 'tweetFactory', 'flashmessageFactory'];

    function tweet($state, $filter, userFactory, Tweet, FM) {
        return {
            restrict: 'E',
            templateUrl: '/gistter/tweet/tweet.html',
            scope: {
                tweetData: '='
            },
            link: function (scope) {
                scope.treply = {};
                scope.user = userFactory.getUsername();
                scope.profile_from_user = (scope.user == scope.tweetData.user.username);
                scope.tweetData.body = $filter('linkify')(scope.tweetData.body, scope.tweetData.hashtags);

                scope.replyTweet = function(parent) {
                    Tweet.reply(parent._id, scope.treply.body)
                        .then(function() {
                            FM.setMessage('Has respondido correctamente a @' + parent.user.username, 'success');
                            $state.reload();
                        });
                };

                scope.deleteTweet = function(tweet) {
                    Tweet.remove(tweet._id)
                        .then(function() {
                            FM.setMessage('Tweet eliminado correctamente.', 'warning');
                            $state.go('timeline', {}, {reload: true});
                        })
                }
            }
        }
    }
})();
