(function() {
    angular
        .module('gistter')
        .directive('tweet', function() {
           return {
               restrict: 'E',
               templateUrl: 'tweet.html'
           }
        });
})();
