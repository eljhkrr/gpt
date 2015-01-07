var app = angular.module("myApp", ['ui.bootstrap']);

app.controller("AppController", function($scope, $modal, $log){
	
	$scope.open = function (size, templateFile) {

	    var modalInstance = $modal.open({
	      templateUrl: templateFile,
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	};

	$scope.openBusiness = function(){
		$scope.open('lg', 'business.html');
	};

	$scope.openSecretarial = function(){
		$scope.open('lg', 'secretarial.html');
	};

	$scope.openICT = function(){
		$scope.open('lg', 'ict.html');
	};

	$scope.openLanguages = function(){
		$scope.open('lg', 'languages.html');
	};

});

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});