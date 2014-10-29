(function() {
    'use strict';

    angular
        .module('core.register')
        .controller('RegisterCtrl', function($scope) {

    // function to submit the form after all validation has occurred      
    $scope.submitForm = function(form) {
  // Trigger validation flag.
  $scope.submitted = true;

  // If form is invalid, return and let AngularJS show validation errors.
  if (form.$invalid) {
    return;
  }

  // Default values for the request.
  var config = {
    params : {
      'name' : $scope.name,
      'username' : $scope.username,
      'email' : $scope.email,
      'password' : $scope.password
    },
  };

  // Perform JSONP request.
  var $promise = $http.jsonp('http://localhost:8090/user', config)
    .success(function(data, status, headers, config) {
      if (data.status == 'OK') {
        $scope.name = null;
        $scope.email = null;
        $scope.subjectList = null;
        $scope.url = null;
        $scope.comments = null;
        $scope.messages = 'Your form has been sent!';
        $scope.submitted = false;
      } else {
        $scope.messages = 'Oops, we received your request, but there was an error processing it.';
        $log.error(data);
      }
    })
    .error(function(data, status, headers, config) {
      $scope.progress = data;
      $scope.messages = 'There was a network error. Try again later.';
      $log.error(data);
    })
    .finally(function() {
      // Hide status messages after three seconds.
      $timeout(function() {
        $scope.messages = null;
      }, 3000);
    });

};

  });


})();