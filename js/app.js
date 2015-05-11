(function() {
    // create angular module
    var app = angular.module('gistter', []);

    // create angular controller
    app.controller('FormController', function($scope) {

        // function to submit the form after all validation has occurred
        $scope.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('Fucking Bitches!!!!');
            }
        };
    });

    app.directive("compareTo", function(){
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    });
}());