'use strict';

describe('Component: MyrouteComponent', function () {

  // load the controller's module
  beforeEach(module('alienAttack'));

  var MyrouteComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MyrouteComponent = $componentController('MyrouteComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
