(function() {
    'use strict';

    angular
        .module('shared.alert')
        .controller('AlertCtrl', function ($scope) {
 			$scope.alerts = [
    		{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
   			{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
 		 ];

  		 $scope.addAlert = function() {
   			$scope.alerts.push({msg: 'Another alert!'});
 		};

      $scope.addDangerAlert = function(alertMessage) {
        $scope.alerts.push({type:'danger', msg:alertMessage.valueOf()});
      };

      $scope.addSuccessAlert = function(alertMessage) {
        $scope.alerts.push({type:'success', msg:alertMessage.valueOf()});
      };

      $scope.addAlertMessage = function(alertMessage) {
        $scope.alerts.push({ msg:alertMessage.valueOf()});
      };

 		   $scope.closeAlert = function(index) {
    		$scope.alerts.splice(index, 1);
  		};
	});


})();