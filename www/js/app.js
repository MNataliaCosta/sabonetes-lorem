// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMap', 'facebook', 'ngCordovaOauth'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


  .state('app', {
  url: '/app',
  abstract: true,
  templateUrl: 'templates/menu.html',
  controller: 'AppCtrl'
})

  .state('app.faca-o-seu', {
    url: '/faca-o-seu',
    views: {
      'menuContent': {
        templateUrl: 'templates/faca-o-seu.html',
        controller: 'FacaOSeuCtrl'
      }
    }
  })

//state pro detalhe da receita
    .state('app.detalheReceita', {
      url: '/faca-o-seu/detalhe-receita/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/detalhe-receita.html',
          controller: 'DetalheReceitaCtrl'
        }
      }
    })

  .state('app.ondeComprar', {
      url: '/onde-comprar',
      views: {
        'menuContent': {
          templateUrl: 'templates/onde-comprar.html',
          controller: 'OndeComprarCtrl'
        }
      }
    })

  .state('app.login-duvidas', {
    url: '/login-duvidas',
    views: {
      'menuContent': {
        templateUrl: 'templates/login-duvidas.html',
        controller: 'LoginDuvidasCtrl'
      }
    }
  })

  .state('app.duvidas', {
    url: '/login-duvidas/tire-suas-duvidas',
    views: {
      'menuContent': {
        templateUrl: 'templates/tire-suas-duvidas.html',
        controller: 'DuvidasCtrl'
      }
    }
  })

  .state('app.sobre', {
    url: '/sobre',
    views: {
      'menuContent': {
        templateUrl: 'templates/sobre.html',
        controller: 'SobreCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/faca-o-seu');
})

.config(function(FacebookProvider) {
   // Set your appId through the setAppId method or
   // use the shortcut in the initialize method directly.
   FacebookProvider.init('369080470174725');
})

;
