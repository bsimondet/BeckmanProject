'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/passwordReset', {
        template: '<password-reset></password-reset>'
      });
  });
