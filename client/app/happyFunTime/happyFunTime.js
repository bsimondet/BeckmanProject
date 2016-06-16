'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/happyFunTime', {
        template: '<happy-fun-time></happy-fun-time>'
      });
  });
