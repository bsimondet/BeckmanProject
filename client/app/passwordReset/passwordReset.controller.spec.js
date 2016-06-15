'use strict';

describe('Component: PasswordResetComponent', function () {

  // load the controller's module
  beforeEach(module('beckmenProjectApp'));

  var PasswordResetComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PasswordResetComponent = $componentController('PasswordResetComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
