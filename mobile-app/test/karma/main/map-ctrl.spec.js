'use strict';

describe('module: main, controller: MapCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MapCtrl;
  beforeEach(inject(function ($controller) {
    MapCtrl = $controller('MapCtrl');
  }));

  it('should do something', function () {
    expect(!!MapCtrl).toBe(true);
  });

});
