'use strict';

describe('module: main, controller: GoogleAuthCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var GoogleAuthCtrl;
  beforeEach(inject(function ($controller) {
    GoogleAuthCtrl = $controller('GoogleAuthCtrl');
  }));

  it('should do something', function () {
    expect(!!GoogleAuthCtrl).toBe(true);
  });

});
