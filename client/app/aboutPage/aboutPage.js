'use strict';

angular.module('beckmenProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/aboutPage', {
        template: '<about-page></about-page>'
      });
  });
