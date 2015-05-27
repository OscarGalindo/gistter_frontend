(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('tag.controller', tagcontroller);

    tagcontroller.$inject = ['tagFactory', '$scope'];

    function tagcontroller(tagFactory, $scope)
    {
        $scope.tweets = tagFactory.data.tweets;
    }
})();
