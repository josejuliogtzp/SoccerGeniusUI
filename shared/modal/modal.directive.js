(function() {
    'use strict';

    angular
        .module('shared.modal')
        .directive('modalView', function() {
            return {
              restrict: "EA",
              transclude: true,
              templateUrl: 'shared/modal/modal.view.html'
            }
});


})();