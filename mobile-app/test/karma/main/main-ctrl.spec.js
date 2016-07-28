'use strict';

describe('module: main, controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MainCtrl;
  beforeEach(inject(function ($controller) {
    MainCtrl = $controller('MainCtrl');
  }));

  it('should do something', function () {
    expect(!!MainCtrl).toBe(true);
  });

});
