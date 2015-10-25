'use strict';

(function () {
  angular.module('pchk-locations').controller('LocationsCtrl', function ($stateParams, LocationsService) {
    var vm = this;
    vm.loaded = false;
    updateBackground('assets/images/bg.jpg')

    // Get pollens forecast from current (identified by woeid)
    LocationsService.getForecastFromLocation($stateParams.woeid).then(function (result) {
      vm.loaded = true;
      vm.pollens = result.periods;
      vm.city = result.location.name;
      vm.woeid = result.woeid;
    }, function (error){
      vm.loaded = true;
      console.log("Can't reach the forecast API or ressources does not exist:" +error.status);
    });

    // Get photo from current location (identified by woeid)
    LocationsService.getPhotoFromLocation($stateParams.woeid)
      .success(function (data) {
        if (data) {
          var resPhoto = vm.getRightUrl(data.photos.photo);
          if (resPhoto) {
            updateBackground(resPhoto.url_o);
            vm.photo = {
              'url': 'https://www.flickr.com/photos/' + resPhoto.owner + '/' + resPhoto.id
            };
          }
        }
      }).
      error(function () {
        vm.photo = {
          'source': '',
          'url': ''
        };
      });

    // Build the url of the Flickr image
    vm.getRightUrl = function (photos) {
      var res = '';
      var initialI = Math.round(Math.random() * photos.length);
      var avoidInfiniteLoop = 0;
      for (var i = initialI; i < photos.length; Math.round(Math.random() * photos.length)) {
        if (avoidInfiniteLoop > photos.length)
          break;

        if (photos[i].url_o && photos[i].width_o > photos[i].height_o) {
          res = photos[i];
          console.log(res);
          break;
        }
        avoidInfiniteLoop++;
      }
      return res;
    };

    // Get the classname from the forecast level
    vm.classFromLevel = function(level){

      var className = "";
      switch(level) {
        case 'very_low':
          className = "levelVeryLow";
          break;
        case "low":
          className = "levelLow";
          break;
        case "medium":
          className = "levelMedium";
          break;
        case "high":
          className = "levelHigh";
          break;
        case "very_high":
          className = "levelVeryHigh";
          break;
        default:
          className = "levelDefault"
      }
      return className;
    };

  });
})();
