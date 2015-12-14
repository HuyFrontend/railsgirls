
angular.module('AngularApp').directive('dateFormatValidator', function() {
  var pattern;
  pattern = /(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])/;
  return {
    require: 'ngModel',
    link: function($scope, element, attrs, ngModel) {
      return ngModel.$validators.dateFormat = function(value) {
        return pattern.test(value);
      };
    }
  };
});

angular.module('AngularApp').directive('emailFormatValidator', function() {
  var pattern;
  pattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
  return {
    require: 'ngModel',
    link: function($scope, element, attrs, ngModel) {
      return ngModel.$validators.emailFormat = function(value) {
        return pattern.test(value);
      };
    }
  };
});

// app.directive('formElementDirective', function ($parse) {
//   return {
//     restrict: 'ACE',
//     require: '?ngModel',
//     link: function (scope, element, attrs) {
//       if (attrs.ngModel && attrs.value) {
//         $parse(attrs.ngModel).assign(scope, attrs.value);
//       }
//     }
//   };
// });

// angular.module('AngularApp').directive('formElementDirective', [function () {
//   'use strict';
//   var directiveDefinitionObject = {    
//     restrict: 'ACE',
//     require: '?ngModel',
//     link: function postLink(scope, iElement, iAttrs, validateCtrl) {
//       if (iAttrs.value && validateCtrl) {
//         validateCtrl.$setViewValue(iAttrs.value);
//       }
//     }
//   };
//   return directiveDefinitionObject;
// }]);

app.directive('formElementDirective', function() {
  return {
    restrict: 'ACE',
    controller: [
      '$scope', '$element', '$attrs', '$parse', function($scope, $element, $attrs, $parse) {
        var getter, setter, val;
        val = $attrs.ngInitial || $attrs.value;
        if($attrs.ngModel) {
        console.log($attrs);
          getter = $parse($attrs.ngModel);
          setter = getter.assign;
          setter($scope, val);
          console.log('scope', $scope);
          console.log('val', val);
        }
      }
    ]
  };
});
