/**
 * Created by iliayurin on 26.10.16.
 */

angular
    .module("myApp.letter-toggle", [])

    .directive("letterToggle", [
        function() {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    element.bind('click', function() {
                        element.closest("div").next().fadeToggle();
                        element.toggleClass("show");
                    });
                }
            };
        }])
;