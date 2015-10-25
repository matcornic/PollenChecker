'use strict';

(function () {
  angular.module('pchk-home').controller('HomeCtrl', function (Restangular, PlacesService, $state, europeanCountries) {

    updateBackground('assets/images/bg.jpg');
    var vm = this;
    vm.cities = [];
    vm.loaded = true;
    vm.goloaded = true;

    // When clicking on the Go button
    vm.validForm = function () {
      vm.goloaded = false;
      if (vm.city && vm.city.length >= 3) {
        PlacesService.getCityInfo(vm.city).success(function (data) {
          if (data) {
            var cityFromAPI = data.places.place[0];
            if (cityFromAPI && cityFromAPI.woeid) {
              $state.go("main.locations", {woeid: cityFromAPI.woeid});
            }
          }
        }).error(function(error){
        });
      }
    };

    // When typing any key in the input
    vm.keyUp = function(){
      if (vm.city && vm.city.length >= 3) {
        vm.loaded = false;
        PlacesService.getCitiesInfo(vm.city).success(function (data) {
          if (data) {
            vm.cities = vm.filterEuropeanCountries(data.places.place);
            vm.loaded = true;
          }
        });
      }
    };

    // Filter europeans countries from list of cities
    // Returns an array with european countries
    vm.filterEuropeanCountries = function(cities){
      var cpt = 0;
      var returnCities = [];
      if(cities){
        for (var i = 0; i < cities.length; i++) {
          var city = cities[i];
          // Keeps only city with woeid from static array.
          if(europeanCountries.indexOf(city["country attrs"].woeid) > -1){
            returnCities[cpt] = city;
            cpt++;
          }
        }
      }
      return returnCities;
    };

  });
})();

