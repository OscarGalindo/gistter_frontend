(function () {
    'use strict';

    angular
        .module('gistter')
        .controller('flashmessageCtrl', flashmessage);

    flashmessage.$inject = ['$scope', 'flashmessageFactory'];

    /* @ngInject */
    function flashmessage($scope, Flashmessage)
    {
        /* jshint validthis: true */
        var vm = this;

        $scope.fmsg = function() {
            return Flashmessage.getMessage();
        };
    }
})();
