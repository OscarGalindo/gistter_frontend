(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('gistterCtrl', gistterCtrl);

    gistterCtrl.$inject = ['localStorageService', 'userFactory'];

    /* @ngInject */
    function gistterCtrl(localStorageService, User) {
        /* jshint validthis: true */
        var vm = this;

        vm.token = User.isAuth();
    }
})();
