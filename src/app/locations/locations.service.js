'use strict';

(function () {
    angular.module('pchk-locations').factory('LocationsService', function (Restangular) {
      return {
           getForecastFromLocation : function(woaid){
              return Restangular.one('forecasts',woaid).get();
           }
      }
    });
})();

