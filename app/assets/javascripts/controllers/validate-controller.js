// create angular controller

app.controller('validateCtrl', ['$scope', function($scope) {
  // function to submit the form after all validation has occurred
  $scope.idea = {
    name: document.getElementById('idea_name').getAttribute('init-value'),
    description: document.getElementById('idea_description').getAttribute('init-value')
  };
  // $scope.submitForm = function (e) {
  //   // check to make sure the form is completely valid
  //   e.preventDefault();
  //   if ($scope.myForm.$valid) {
  //     alert('our form is amazing');
  //   }
  //   else {
  //     alert('error');
  //     return;
  //   }
  // };
}]);
