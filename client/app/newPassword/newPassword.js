'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/newPassword', {
        template: '<new-password></new-password>'
      });
  });
