'use strict';

describe('module: main, service: Main', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Main;
  var $timeout;
  beforeEach(inject(function (_Main_, _$timeout_) {
    Main = _Main_;
    $timeout = _$timeout_;
  }));

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      Main.changeBriefly();
    });
    it('should briefly change', function () {
      expect(Main.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(Main.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

});
