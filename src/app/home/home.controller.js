'use strict';

(function () {
  angular.module('pchk-home').controller('HomeCtrl', function (Restangular, PlacesService, $state) {

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
    var woeidOfCitiesFromEurope = [23424950,23424897,23424925,23424744,23424892,23424986,23424819,23424853,23424833,26812346,23424742,23424957,20069817,23424843,23424761,23424879,23424945,20069818,23424881,23424757,23424771,23424750,23424969,23424909,23424844,23424829,23424975,23424933,23424810,23424877,23424803,23424885,23424923,23424796,23424976,23424875,23424765,23424874,23424805,23424954,23424910,23424845,23424812];
    vm.filterEuropeanCountries = function(cities){
      console.log(cities);
      var cpt = 0;
      var returnCities = [];
      if(cities){
        for (var i = 0; i < cities.length; i++) {
          var city = cities[i];
          // Keeps only city with woeid from static array.
          if(woeidOfCitiesFromEurope.indexOf(city["country attrs"].woeid) > -1){
            returnCities[cpt] = city;
            cpt++;
          }
        }
      }
      return returnCities;
    };

  });
})();

