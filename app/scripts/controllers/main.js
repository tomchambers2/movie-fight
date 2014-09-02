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
  		mixpanel.track(
  			'search',
  			{ 'Movie': $scope.query }
  		);

  		calq.action.track(
		    'search',
		    { 'Movie': $scope.query }
		);

  		$scope.loading = true;

  		Imdbapi.doSearch($scope.query,$scope.year).then(function(result) {
  			if (result.data.Response === 'True') {
	  			$scope.movies.push(result.data);
	  			$scope.query = '';
	  			$scope.year = '';
	  			mixpanel.track('search-success');
	  		} else {
	  			var message = 'Sorry, we couldn\'t find that movie';
	  			if (!$scope.year) {
	  				message += '. Try adding a year?';
	  			}
	  			showMessage(message);
	  			mixpanel.track('search-not-found', { 'Movie': $scope.query });
	  			calq.action.track('search-not-found', { 'Movie': $scope.query });
	  		}
	  		$scope.loading = false;	  		
  		}, function() {
  			showMessage('Sorry, the service may not be working at the moment. Try us later.');
  			mixpanel.track('http-fail');
  			$scope.loading = false;
  		});
  	};

  	$scope.remove = function(id) {
      console.log("removing "+id)
  		$scope.movies.splice(id,1);
  		mixpanel.track('removed-movie');
  	};
  });
