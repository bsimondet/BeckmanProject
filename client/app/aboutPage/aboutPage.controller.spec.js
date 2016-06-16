'use strict';

describe('Component: AboutPageComponent', function () {

  // load the controller's module
  beforeEach(module('beckmenProjectApp'));

  var AboutPageComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AboutPageComponent = $componentController('AboutPageComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
