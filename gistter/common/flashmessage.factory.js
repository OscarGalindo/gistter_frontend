(function () {
    'use strict';

    angular
        .module('gistter')
        .factory('flashmessageFactory', flashmessageFactory);

    flashmessageFactory.$inject = ['$rootScope'];

    function flashmessageFactory($rootScope) {
        var queue = [];
        var currentMessage = "";
        $rootScope.$on("$stateChangeSuccess", function () {
            currentMessage = queue.shift() || "";
        });

        var flashmessage = {
            setMessage: setMessage,
            getMessage: getMessage
        };

        return flashmessage;

        //////

        function setMessage(message, type) {
            queue.push({'text': message, 'type': type});
        }

        function getMessage() {
            return currentMessage;
        }

    }
})();
