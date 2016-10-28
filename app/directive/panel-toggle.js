/**
 * Created by iliayurin on 26.10.16.
 */

angular
    .module("dtvLetter-toggle", [])

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

    .directive("messageToggle", [
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

    .directive("threadToggle", [
        function() {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    element.bind('click', function() {
                        if(attrs.threadToggle){
                            element.closest("div").next().fadeToggle();
                            element.toggleClass("show");
                        }
                        else{
                            element.closest("div").next().fadeToggle();
                            element.toggleClass("show");
                        }
                    });
                }
            };
        }])
;