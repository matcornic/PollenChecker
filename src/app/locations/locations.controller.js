'use strict';

(function () {
    angular.module('pchk-locations').controller('LocationsCtrl', function ($stateParams, LocationsService) {
      var vm = this;
      LocationsService.getForecastFromLocation($stateParams.woeid).then(function(result){
         vm.pollens = result.periods;
         vm.city  = result.location.name;
         vm.woeid = result.woeid;
         console.log(vm.pollens);

      });

       LocationsService.getPhotoFromLocation($stateParams.woeid)
        .success(function(data) {
             if(data){
                vm.photo = vm.getRightUrl(data.photos.photo);
                console.log(vm.photo);
             }
           }).
         error(function() {
           vm.photo = '';
         });

      vm.getRightUrl = function(photos){
        var res = '';
        for (var i = 0; i < photos.length; i++) {
            if(photos[i].url_o){
              res = photos[i].url_o;
              break;
            }
        }
        return res;
      };

    });
})();
