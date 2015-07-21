'use strict';

(function () {
    angular.module('pchk-directives', ['pchk-core'])
    .directive('backImg', function(){
         return function(scope, element, attrs){
             attrs.$observe('backImg', function(value) {
                 element.css({
                     'background-image': 'url(' + value +')',
                     'background-size' : 'cover',
                     'background-position' : 'center',
                      'opacity': '0.25'
                 });
             });
         };
     });

})();
