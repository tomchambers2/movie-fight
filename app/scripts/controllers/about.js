'use strict';

/**
 * @ngdoc function
 * @name moviefightApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the moviefightApp
 */
angular.module('moviefightApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
