'use strict';
angular.module('main')
.controller('GoogleAuthCtrl', function ($log, $scope, $state, WebSocket, $ionicHistory, $ionicConfig) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $ionicConfig.backButton.previousTitleText(false);
  $ionicConfig.backButton.icon('ion-chevron-left');
  $ionicConfig.backButton.text('');

  $log.log('Hello from your Controller: GoogleAuthCtrl in module main:. This is your controller:', this);

  $scope.signIn = function (user) {
    this.email = user.username;
    this.password = user.password;
    this.auth = 'google';

    // TODO: Authenticate here

    $scope.ws = WebSocket;
    $scope.ws.sendUser(this.auth, this.email, this.password);

    // If authentication is successful, go to Map view
    $state.go('main.map');
  };

});
