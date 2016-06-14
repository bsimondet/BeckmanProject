'use strict';

angular.module('beckmenProjectApp.auth', ['beckmenProjectApp.constants', 'beckmenProjectApp.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
