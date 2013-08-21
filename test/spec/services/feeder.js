'use strict';

describe('Service: feeder', function () {

  // load the service's module
  beforeEach(module('readsterApp'));

  // instantiate service
  var feeder;
  beforeEach(inject(function (_feeder_) {
    feeder = _feeder_;
  }));

  it('should do something', function () {
    expect(!!feeder).toBe(true);
  });

});
