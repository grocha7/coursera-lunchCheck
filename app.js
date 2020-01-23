(function (){
	'use strict';

angular.module('LunchCheck', ['ngSanitize'])
.controller('LunchController', ['$scope', LunchController]);

function LunchController ($scope,  $injector) {
	$scope.lunch = "";
	$scope.message = ""
	$scope.check = function() {
		var splitString = $scope.lunch.split(',');
		var numStrings = splitString.length;

		if($scope.lunch === ""){
			$scope.message =  "<h4>Please enter data first</h4>";
		}
		else if ( numStrings <= 3){
			$scope.message =  "<h4>Enjoy!</h4>";
		}else{
			$scope.message = "<h4>Too much!</h4>";
		}
		

	}
}

})()