'use strict';

/**
 * @ngdoc service
 * @name moviefightApp.imdbapi
 * @description
 * # imdbapi
 * Factory in the moviefightApp.
 */
angular.module('moviefightApp')
  .service('Imdbapi', function ($http) {
    this.doSearch = function(query,year) {
      var url = 'http://omdbapi.com/?t='+query;
      if (year) {
        url += '&y='+year;
      }
      var promise = $http.get(url).
        success(function(data) {
          return data;
        });
      return promise;
    };
  });