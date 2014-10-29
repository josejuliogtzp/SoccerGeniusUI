(function() {
    'use strict';

    angular
          .module('core.header')
          .directive('headerView', function() {
            return {
              restrict: "EA",
              transclude: true,
              templateUrl: 'components/core/header/header.view.html'
            }
});


})();