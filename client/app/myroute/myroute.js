'use strict';

angular.module('alienAttack')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myroute', {
        template: '<myroute></myroute>'
      });
  });
