angular.module('login', ['ionic','firebase'])

.controller('LoginCtrl', function($scope, $firebase, $timeout) {

  var chatRef = new Firebase('https://incandescent-fire-6685.firebaseio.com/');
  var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log("login error: " + error);
    } else if (user) {
      // user authenticated with Firebase
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } else {
      console.log("user is logged out");
    }
  });
  $scope.auth = auth;
  
});