(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('profileCtrl', profile);

    profile.$inject = ['userProfile'];

    /* @ngInject */
    function profile(userProfile) {
        console.log(userProfile);
    }
})();
