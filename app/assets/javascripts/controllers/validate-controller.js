// create angular controller

app.controller('validateCtrl', ['$scope', function($scope) {
  // function to submit the form after all validation has occurred
  $scope.submitForm = function(e) {
    // check to make sure the form is completely valid
    if ($scope.myForm.$valid) {
      alert('our form is amazing');
    }
    else {
      alert('error');
      e.preventDefault();
    }
  };
}]);
