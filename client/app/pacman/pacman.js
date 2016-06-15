'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pacman', {
        template: '<pacman></pacman>'
      });
  });
