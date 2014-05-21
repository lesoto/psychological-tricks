'use strict';

angular
  .module('psychologicalTricksApp', [
    'localization',
    'trickControllers',
    'trickServices',
    'trickFilters',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {templateUrl:'views/main.html', controller:'HomeController'}).
        when('/tricks', {templateUrl: 'views/trick-list.html', controller:'TrickListCtrl'}).
        when('/tricks/:trickId', {templateUrl: 'views/trick-detail.html', controller:'TrickDetailCtrl'}).
        otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  });
 