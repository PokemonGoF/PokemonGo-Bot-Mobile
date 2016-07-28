'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngWebSocket',
  'LocalStorageModule'
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
      .state('main.home', {
        url: '/home',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/home.html',
            controller: 'HomeCtrl'
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
      .state('main.login', {
        url: '/login',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/login.html',
            controller: 'LoginCtrl'
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
      })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});
