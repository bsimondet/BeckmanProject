'use strict';

describe('Component: NewPasswordComponent', function () {

  // load the controller's module
  beforeEach(module('beckmenProjectApp'));

  var NewPasswordComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    NewPasswordComponent = $componentController('NewPasswordComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
