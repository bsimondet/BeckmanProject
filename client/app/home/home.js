'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        template: '<home></home>',
        authenticate: true
      });
  });
