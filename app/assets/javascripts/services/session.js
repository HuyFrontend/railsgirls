// angular.module('cafeTownsend.services').factory('SessionService', [
//   '$log', '$resource', function($log, $resource) {
//     var authorized, currentUser, getCurrentUser, login, logout, service, updateCurrentUser;
//     service = $resource('/sessions/:param', {}, {
//       'login': {
//         method: 'POST'
//       },
//       'logout': {
//         method: 'DELETE'
//       }
//     });
//     authorized = function() {
//       return getCurrentUser().authorized === 'true';
//     };
//     login = function(newUser) {
//       var promise;
//       promise = service.login(newUser).$promise;
//       promise.then(function(result) {
//         return updateCurrentUser(result.user, result.authorized);
//       });
//       return promise;
//     };
//     logout = function() {
//       var promise;
//       promise = service.logout({
//         param: currentUser.id
//       }).$promise;
//       updateCurrentUser({}, false);
//       return promise;
//     };
//     currentUser = {};
//     getCurrentUser = function() {
//       return currentUser;
//     };
//     updateCurrentUser = function(user, authorized) {
//       if (user) {
//         currentUser.id = user.id;
//         currentUser.name = user.name;
//       }
//       return currentUser.authorized = authorized;
//     };
//     return {
//       login: login,
//       logout: logout,
//       authorized: authorized,
//       getCurrentUser: getCurrentUser
//     };
//   }
// ]);