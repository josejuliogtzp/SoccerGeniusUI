(function () {
    'use strict';

    angular
        .module('shared.carousel')
        .directive('carouselView', function () {
            return {
                restrict: "EA",
                transclude: true,
                templateUrl: 'shared/carousel/carousel.view.html'
            }
        });


})();