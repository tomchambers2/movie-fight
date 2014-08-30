'use strict';

describe('Service: imdbapi', function () {

  // load the service's module
  beforeEach(module('moviefightApp'));

  // instantiate service
  var imdbapi;
  beforeEach(inject(function (_imdbapi_) {
    imdbapi = _imdbapi_;
  }));

  it('should do something', function () {
    expect(!!imdbapi).toBe(true);
  });

});
