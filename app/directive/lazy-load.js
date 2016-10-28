/**
 * Created by iliayurin on 26.10.16.
 */


angular
    .module("myApp.lazy-load", [])
    .directive("lazyLoad", [
        "$window",
        function($window) {
            return {
                restrict: "A",
                link: function(scope, element, attrs) {
                    angular.element($window).bind('scroll', function() {
                        if ((element.prop('scrollHeight')-50) < (angular.element($window).scrollTop() + angular.element($window).height())) {
                            scope.fnMoreItems();
                        }
                    });
                }
            };
        }])
;

