(function() {
    'use strict';

    angular
          .module('core.register')
          .directive('registerView', function() {
            return {
              restrict: "EA",
              transclude: true,
              templateUrl: 'components/core/register/register.view.html'
            }
})
          .directive('ngMatch', ['$parse', function ($parse) {
 
var directive = {
link: link,
restrict: 'A',
require: '?ngModel'
};
return directive;
 
function link(scope, elem, attrs, ctrl) {
// if ngModel is not defined, we don't need to do anything
if (!ctrl) return;
if (!attrs['ngMatch']) return;
 
var firstPassword = $parse(attrs['ngMatch']);
 
var validator = function (value) {
var temp = firstPassword(scope),
v = value === temp;
ctrl.$setValidity('ngMatch', v);
return value;
}
 
ctrl.$parsers.unshift(validator);
ctrl.$formatters.push(validator);
attrs.$observe('ngMatch', function () {
validator(ctrl.$viewValue);
});
 
}
}]);


})();