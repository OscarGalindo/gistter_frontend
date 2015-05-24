(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('profileCtrl', profile);

    profile.$inject = ['user'];

    /* @ngInject */
    function profile(user)
    {
        console.log('entro');
        /* jshint validthis: true */
        var vm = this;

    }
})();
