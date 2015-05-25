(function() {
    'use strict';

    angular
        .module('gistter')
        .directive('tweet', function(userFactory) {
           return {
               restrict: 'E',
               templateUrl: '/gistter/tweet/tweet.html',
               scope: {
                   tweetData: '='
               },
               link: function(scope) {
                   scope.profile_from_user = (userFactory.getUsername() == scope.tweetData.user.username);
               }
           }
        });
})();
