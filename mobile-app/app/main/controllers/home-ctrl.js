'use strict';
angular.module('main')
.controller('HomeCtrl', function ($log, $scope) {

  $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);

  $scope.onClick = function () {
    $log.log('Button Clicked');
  };

});
