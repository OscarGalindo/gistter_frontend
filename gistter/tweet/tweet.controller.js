(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('tweetCtrl', tweet);

    tweet.$inject = ['$scope', 'tweet'];

    function tweet($scope, tweet)
    {
        $scope.is_response = tweet.data.is_response;
        $scope.childs = tweet.data.childs;
        $scope.tweet = tweet.data.tweet;
    }
})();
