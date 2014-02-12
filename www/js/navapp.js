angular.module('navApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html",
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "about.html",
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "contact.html"
    })

    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/home");
})

.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');
})

.controller('AboutCtrl', function($scope) {
  console.log('AboutCtrl');
});