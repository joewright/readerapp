'use strict';

describe('Controller: FeedsListCtrl', function () {

  // load the controller's module
  beforeEach(module('readsterApp'));

  var FeedsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedsListCtrl = $controller('FeedsListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.feeds);
  });
});
