'use strict';

angular.module('beckmenProjectApp.admin')
  .config(function($routeProvider) {
    $routeProvider.when('/admin', {
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin'
    });
  });
