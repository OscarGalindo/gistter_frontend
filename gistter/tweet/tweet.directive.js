(function() {
    angular
        .module('gistter')
        .directive('tweet', function() {
           return {
               restrict: 'E',
               templateUrl: '/gistter/tweet/tweet.html'
           }
        });
})();
