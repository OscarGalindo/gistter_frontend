// create angular module
var app = angular.module('validation', []);

// create angular controller
app.controller('FormController', function($scope) {

    // function to submit the form after all validation has occurred
    $scope.signinForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert('Fucking Bitches!!!!');
        }
    };
});