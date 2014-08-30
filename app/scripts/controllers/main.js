'use strict';

/**
 * @ngdoc function
 * @name moviefightApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviefightApp
 */
angular.module('moviefightApp')
  .controller('MainCtrl', function ($scope, $timeout, Imdbapi) {
  	$scope.movies = [];
  	$scope.loading = false;

  	var showMessage = function(message) {
  		$scope.message = message;
  		$timeout(function() {
  			$scope.message = '';
  		},2000);
  	};

  	$scope.search = function() {
  		$scope.loading = true;

  		Imdbapi.doSearch($scope.query,$scope.year).then(function(result) {
  			if (result.data.Response === 'True') {
	  			$scope.movies.push(result.data);
	  			$scope.query = '';
	  			$scope.year = '';
	  		} else {
	  			var message = 'Sorry, we couldn\'t find that movie.';
	  			if (!$scope.year) {
	  				message += ' Try adding a year?';
	  			}
	  			showMessage(message);
	  		}
	  		$scope.loading = false;	  		
  		}, function() {
  			showMessage('Sorry, the service may not be working at the moment. Try us later.');
  			$scope.loading = false;
  		});
  	};

  	$scope.remove = function(id) {
  		$scope.movies.splice(id,1);
  	};
  });
