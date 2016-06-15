'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tetris', {
        template: '<tetris></tetris>'
      });
  });
