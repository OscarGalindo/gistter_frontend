(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('profileCtrl', profile);

    profile.$inject = ['$scope', 'userProfile', 'userFactory'];

    /* @ngInject */
    function profile($scope, userProfile, User) {
        // Boolean con el que sabremos si es el perfil del usuario que esta logueado o no
        $scope.profile_from_user = (User.getUsername() == userProfile.data.profile.username);

        $scope.profile = userProfile.data.profile;
        $scope.tweets = userProfile.data.tweets;
    }
})();
