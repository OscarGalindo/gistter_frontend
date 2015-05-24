(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('timelineCtrl', timeline);

    timeline.$inject = ['$state', 'userFactory', 'flashmessageFactory'];

    /* @ngInject */
    function timeline($state, User, FM) {
        if(!User.isAuth()) {
            FM.setMessage('Debes loguearte para ver la página', 'warning');
            $state.go('login'); // Enviar a una página de inicio con login/signup
        }
    }

})();
