'use strict';

(function () {
    angular.module('pchk-locations').controller('LocationsCtrl', function ($stateParams, LocationsService) {
      var vm = this;
      LocationsService.getForecastFromLocation($stateParams.woaid).then(function(result){
         vm.pollens = result;
         console.log(vm.pollens);
      });

    });
})();
