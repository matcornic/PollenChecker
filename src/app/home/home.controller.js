'use strict';

(function () {
  angular.module('pchk-home').controller('HomeCtrl', function (Restangular, PlacesService, $state) {

    var vm = this;
    vm.cities = [];
    vm.validForm = function () {
      console.log("validForm");
      if (vm.city && vm.city.length >= 3) {
        PlacesService.getCityInfo(vm.city).success(function (data) {

          if (data) {
            var cityFromAPI = data.places.place[0];
            if (cityFromAPI && cityFromAPI.woeid) {
              $state.go("main.locations", {woeid: cityFromAPI.woeid});
            }
          }
        }).error(function (erreur) {
          console.log(erreur);
        });
      }
    };
    updateBackground('assets/images/bg.jpg');
  });
})();

