(function() {
    'use strict';

    angular
        .module('gistter')
        .factory('flashmessageFactory', flashmessageFactory);

    flashmessageFactory.$inject = ['$rootScope'];

    function flashmessageFactory($rootScope) {
        var queue = [];
        var currentMessage = "";
        $rootScope.$on("$stateChangeSuccess", function() {
            console.log('hola');
            console.log(queue);
            currentMessage = queue.shift() || "";
        });

        var flashmessage = {
            setMessage: setMessage,
            getMessage: getMessage
        };

        return flashmessage;

        //////

        function setMessage(message) {
            queue.push(message);
        }

        function getMessage() {
            return currentMessage;
        }

    }
})();