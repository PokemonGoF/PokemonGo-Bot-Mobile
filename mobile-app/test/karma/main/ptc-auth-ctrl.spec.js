'use strict';

describe('module: main, controller: PtcAuthCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var PtcAuthCtrl;
  beforeEach(inject(function ($controller) {
    PtcAuthCtrl = $controller('PtcAuthCtrl');
  }));

  it('should do something', function () {
    expect(!!PtcAuthCtrl).toBe(true);
  });

});
