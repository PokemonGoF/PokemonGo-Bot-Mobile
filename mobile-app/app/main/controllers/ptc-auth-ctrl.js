'use strict';
angular.module('main')
.controller('PtcAuthCtrl', function ($log, $scope, $state, WebSocket) {

  $log.log('Hello from your Controller: PtcAuthCtrl in module main:. This is your controller:', this);

  $scope.signIn = function (user) {
    this.username = user.username;
    this.password = user.password;
    this.auth = 'ptc';

    // TODO: Authenticate here

    $scope.ws = WebSocket;
    $scope.ws.sendUser(this.auth, this.username, this.password);

    // If authentication is successful, go to Map view
    $state.go('main.map');
  };

});
