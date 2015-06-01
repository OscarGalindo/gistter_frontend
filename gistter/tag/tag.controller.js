(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('tagCtrl', tagCtrl);

    tagCtrl.$inject = ['tag', '$scope'];

    function tagCtrl(tag, $scope)
    {
        $scope.tweets = tag.data.tweets;
        $scope.hashtag = tag.data.hashtag;
    }
})();
