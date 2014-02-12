angular.module('navApp', ['ionic'])

.controller('NavCtrl', function($scope) {
  $scope.$on('tab.shown', function() {
    // Maybe load some content here
  });
  $scope.$on('tab.hidden', function() {
    // Perhaps cycle out some data in memory here
  });

  $scope.leftButtons = [
    { 
      text: 'Previous',
	  type: 'button-positive',
	  content: '<i class="icon ion-navicon"></i>',
      click: function(e) {
        console.log('Click button');
      }
    }
  ]

});