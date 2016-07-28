'use strict';

describe('module: main, controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MenuCtrl;
  beforeEach(inject(function ($controller) {
    MenuCtrl = $controller('MenuCtrl');
  }));

  it('should do something', function () {
    expect(!!MenuCtrl).toBe(true);
  });

});
