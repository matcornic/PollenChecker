'use strict';

(function () {
    angular.module('pchk-locations').factory('LocationsService', function (Restangular, $http, flickrAppKey) {
      return {
           getForecastFromLocation : function(woeid){
              return Restangular.one('forecasts',woeid).get();
           },
           getPhotoFromLocation : function(woeid){
              return $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest/',
                    params: {
                      method : 'flickr.photos.search',
                      api_key : flickrAppKey,
                      tags : ['street', 'architecture', 'building', 'skyscraper', 'urban'].join(','),
                      tags_mode : 'any',
                      sort : 'interestingness-desc',
                      privacy_filter : 1,
                      accuracy : 11,
                      safe_search : 1,
                      content_type : 1,
                      woe_id : woeid,
                      media : 'photos',
                      extras : ['url_o', 'url_l', 'license'].join(','),
                      license : [1,2,3,4,5,6,7,8,9,10].join(','),
                      format : 'json',
                      nojsoncallback : 1
                    }
                 });

           }
      };

    });
})();

