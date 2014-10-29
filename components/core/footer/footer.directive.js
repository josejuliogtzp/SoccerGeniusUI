(function() {
    'use strict';

    angular
          .module('core.footer')
          .directive('footerView', function() {
            return {
              restrict: "EA",
              transclude: true,
              templateUrl: 'components/core/footer/footer.view.html'
            }
});


})();