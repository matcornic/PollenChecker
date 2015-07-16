'use strict';

(function () {
    angular.module('pchk-locations').factory('LocationsService', function (Restangular, $http) {
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
                      api_key : 'b1e323d889060512b7690c8c24cc1de6',
                      tags : ['street', 'architecture', 'building'].join(','),
                      sort : 'interestingness-desc',
                      privacy_filter : 1,
                      accuracy : 11,
                      safe_search : 1,
                      content_type : 1,
                      woe_id : woeid,
                      media : 'photos',
                      extras : ['url_o', 'url_l'].join(','),
                      licence : [4,6,3,2,1,5,7,8,9,10].join(','),
                      format : 'json',
                      nojsoncallback : 1
                    }
                 });

           }
      };

    });
})();

