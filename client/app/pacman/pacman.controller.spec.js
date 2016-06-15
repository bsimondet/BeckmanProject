'use strict';

describe('Component: PacmanComponent', function () {

  // load the controller's module
  beforeEach(module('beckmenProjectApp'));

  var PacmanComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PacmanComponent = $componentController('PacmanComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
