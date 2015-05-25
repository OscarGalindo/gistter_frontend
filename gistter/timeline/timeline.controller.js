(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('timelineCtrl', timeline);

    timeline.$inject = ['$scope', '$state', 'tweetFactory', 'userFactory', 'flashmessageFactory', 'timelineData'];

    /* @ngInject */
    function timeline($scope, $state, Tweet, User, FM, timelineData) {
        if(!User.isAuth()) {
            FM.setMessage('Debes loguearte para ver la página', 'warning');
            $state.go('login'); // Enviar a una página de inicio con login/signup
        }

        console.log(timelineData);

        $scope.tweet = {};
        $scope.tweets = [];
        $scope.postTweet = function() {
            var tweet = {
                body: $scope.tweet.body,
                code: $scope.tweet.gist
            };
            Tweet.create(tweet)
                .success(function() {
                    FM.setMessage('Tweet enviado correctamente', 'success');
                    $state.reload();
                });
        }
    }

})();
