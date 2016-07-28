'use strict';

describe('module: main, controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var LoginCtrl;
  beforeEach(inject(function ($controller) {
    LoginCtrl = $controller('LoginCtrl');
  }));

  it('should do something', function () {
    expect(!!LoginCtrl).toBe(true);
  });

});
