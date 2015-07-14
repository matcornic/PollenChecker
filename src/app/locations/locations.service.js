'use strict';

(function () {
    angular.module('pchk-locations').factory('LocationsService', function (Restangular, $http) {
      return {
           getForecastFromLocation : function(woeid){
              return Restangular.one('forecasts',woeid).get();
           },
           getPhotoFromLocation : function(woeid){
              return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=813ec1ed80d5bc136f9a787e4daf0224&tags=street%2Cbuilding%2Carchitecture&sort=interestingness-desc&privacy_filter=1&accuracy=11&safe_search=1&content_type=1&woe_id='+woeid+'&media=photos&extras=url_o%2Curl_l&format=json&nojsoncallback=1');
           }
      };

    });
})();

