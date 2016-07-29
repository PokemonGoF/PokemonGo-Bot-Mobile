'use strict';
angular.module('main', [
  'ionic',
  'ionic-material',
  'ngCordova',
  'ui.router',
  'ngWebSocket',
  'LocalStorageModule',
])
.factory('WebSocket', function ($websocket) {
  // Open a WebSocket connection
  var ws = $websocket('ws://localhost:5000/ws');

  var collection = [];

  ws.onMessage( function (message) {
    collection.push(JSON.parse(message.data));
  });

  var methods = {
    collection: collection,
    sendUser: function (_auth, _username, _pw) {
      ws.send(JSON.stringify({ auth: _auth, username: _username, password: _pw}));
    },
    sendJson: function (data) {
      ws.send(JSON.stringify(data));
    }
  };

  return methods;
})
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/login');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('main.login', {
        url: '/login',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('main.google-auth', {
        url: '/google-auth',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/google-auth.html',
            controller: 'GoogleAuthCtrl'
          }
        }
      })
      .state('main.ptc-auth', {
        url: '/ptc-auth',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/ptc-auth.html',
            controller: 'PtcAuthCtrl'
          }
        }
      })
      .state('main.map', {
        url: '/map',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/map.html',
            controller: 'MapCtrl'
          }
        }
      });
});
