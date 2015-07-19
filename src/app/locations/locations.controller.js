'use strict';

(function () {
  angular.module('pchk-locations').controller('LocationsCtrl', function ($stateParams, LocationsService) {
    var vm = this;

    //
    vm.updateBackground = function (url) {
      var scope = angular.element($("#homeCont")).scope();
      _.defer(function () {
        scope.$apply(function () {
          scope.bg = url;
        });
      });
    };

    vm.updateBackground('assets/images/bg02.jpg');

    LocationsService.getForecastFromLocation($stateParams.woeid).then(function (result) {
      vm.pollens = result.periods;
      vm.city = result.location.name;
      vm.woeid = result.woeid;
      console.log(vm.pollens);

    });

    LocationsService.getPhotoFromLocation($stateParams.woeid)
      .success(function (data) {
        if (data) {
          var resPhoto = vm.getRightUrl(data.photos.photo);
          vm.updateBackground(resPhoto.url_o);
          vm.photo = {
            'url': 'https://www.flickr.com/photos/' + resPhoto.owner + '/' + resPhoto.id
          };
        }
      }).
      error(function () {
        vm.photo = {
          'source': '',
          'url': ''
        };
      });


    vm.getRightUrl = function (photos) {
      var res = '';
      var initialI = Math.round(Math.random() * photos.length);
      var avoidInfiniteLoop = 0;
      for (var i = initialI; i < photos.length; Math.round(Math.random() * photos.length)) {
        if (avoidInfiniteLoop > photos.length)
          break;

        if (photos[i].url_o) {
          res = photos[i];
          console.log(res);
          break;
        }
        avoidInfiniteLoop++;
      }
      return res;
    };

  });
})();
