'use strict';

(function () {
  angular.module('pchk-home').factory('PlacesService', function (Restangular, $http, $q) {
    return {
      // Get the first 7 cities, from a pattern
      getCitiesInfo : function(cityPattern){
        return $http({
          method: 'GET',
          url: "http://where.yahooapis.com/v1/places$and(.q('"+cityPattern+"'),.type(7));start=0;count=5",
          params: {
              appid : 'dj0yJmk9MFJhc1hlQTJNYXVLJmQ9WVdrOVQwbGpia2h1Tkc4bWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD05Mw--',
            format : 'json'
          }
        });
      },
      // Get the firt city, from a pattern
      getCityInfo : function(cityPattern){
        return $http({
          method: 'GET',
          url: "http://where.yahooapis.com/v1/places$and(.q('"+cityPattern+"'),.type(7))",
          params: {
            appid : 'dj0yJmk9MFJhc1hlQTJNYXVLJmQ9WVdrOVQwbGpia2h1Tkc4bWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD05Mw--',
            format : 'json'
          }
        });
      },
      // Get a continuent from the woeid
      getContinentFromWoeid : function(woeid){
        return $http({
          method: 'GET',
          url: "http://where.yahooapis.com/v1/place/"+woeid+"/belongtos.type(29)",
          params: {
            appid : 'dj0yJmk9MFJhc1hlQTJNYXVLJmQ9WVdrOVQwbGpia2h1Tkc4bWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD05Mw--',
            format : 'json'
          }
        });
      }
    };

  });
})();

