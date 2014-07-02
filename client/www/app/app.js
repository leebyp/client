// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'matches', 'profile', 'settings', 'search'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "app/main.html",
      // controller: 'AppCtrl'
    })

    .state('app.settings', {
      url: "/settings",
      views: {
        'navContent' :{
          templateUrl: "app/settings/templates/nav.html"
        },
        'windowContent' :{
          templateUrl: "app/settings/templates/window.html"
        }
      },
      controller: 'SettingsCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'navContent' :{
          templateUrl: "app/search/templates/nav.html",
          controller: 'SearchCtrl'
        },
        'windowContent' :{
          templateUrl: "app/search/templates/window.html",
          controller: 'SearchCtrl'
        }
      },
      // controller: 'SearchCtrl'
    })

    .state('app.profile', {
      url: "/profile",
      views: {
        'navContent' :{
          templateUrl: "app/profile/templates/nav.html"
        },
        'windowContent' :{
          templateUrl: "app/profile/templates/window.html"
        }
      },
      controller: 'SearchCtrl'
    })

    .state('app.matches', {
      url: "/matches",
      views: {
        'navContent' :{
          templateUrl: "app/matches/templates/nav.html"
        },
        'windowContent' :{
          templateUrl: "app/matches/templates/window.html"
        }
      },
      controller: 'MatchesCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});

