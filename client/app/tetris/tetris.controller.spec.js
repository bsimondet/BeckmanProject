'use strict';

describe('Component: TetrisComponent', function () {

  // load the controller's module
  beforeEach(module('beckmenProjectApp'));

  var TetrisComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TetrisComponent = $componentController('TetrisComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
