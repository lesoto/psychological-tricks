'use strict';

var trickControllers = angular.module('trickControllers', []);

trickControllers.controller('TrickListCtrl', ['$scope', 'Trick',
  function($scope, Trick) {
    $scope.tricks = Trick.query();
    $scope.orderProp = 'age';
  }]);

trickControllers.controller('TrickDetailCtrl', ['$scope', '$routeParams', 'Trick',
  function($scope, $routeParams, Trick) {
    $scope.trick = Trick.get({age: $routeParams.trickId}, function(trick) {
      $scope.mainImageUrl = trick.images[0];
    });

  }]);


function AppController($scope, localize) {

    $scope.setEnglishLanguage = function() {
        localize.setLanguage('en-US');
      };

    $scope.setSpanishLanguage = function() {
        localize.setLanguage('es-US');
      };

    $scope.setRussianLanguage = function() {
        localize.setLanguage('ru-RU');
      };
  }

function HomeController($scope) {
}