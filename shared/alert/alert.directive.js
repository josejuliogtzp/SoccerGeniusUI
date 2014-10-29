(function() {
    'use strict';

    angular
        .module('shared.alert')
        .directive('alertView', function() {
            return {
              restrict: "EA",
              transclude: true,
              templateUrl: 'shared/alert/alert.view.html'
            }
});


})();