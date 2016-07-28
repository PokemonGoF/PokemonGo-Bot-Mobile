'use strict';
angular.module('main')
.controller('LoginCtrl', function ($log, $scope, $state) {

  $log.log('Hello from your Controller: LoginCtrl in module main:. This is your controller:', this);

  $scope.googleClicked = function () {
    $state.go('main.google-auth');
  };

  $scope.ptcClicked = function () {
    $state.go('main.ptc-auth');
  };

});
