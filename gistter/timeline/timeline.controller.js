(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('timelineCtrl', timeline);

    timeline.$inject = ['$scope', 'userFactory'];

    /* @ngInject */
    function timeline($scope, User) {

    }
})();
