'use strict';

var trickServices = angular.module('trickServices', ['ngResource']);

trickServices.factory('Trick', ['$resource',
  function($resource){
    return $resource('tricks/:trickId.json', {}, {
      query: {method:'GET', params:{trickId:'tricks'}, isArray:true}
    });
  }]);
