(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('searchCtrl', searcher);

    searcher.$inject = ['users', '$scope'];

    function searcher(users, $scope)
    {
        $scope.users = users.data;
    }
})();
