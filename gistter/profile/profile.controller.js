(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('profileCtrl', profile);

    profile.$inject = ['$scope', 'userProfile'];

    /* @ngInject */
    function profile($scope, userProfile) {
        $scope.profile = userProfile.data.profile;
        $scope.tweets = userProfile.data.tweets;
    }
})();
