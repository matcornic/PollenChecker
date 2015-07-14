'use strict';

(function () {
    angular.module('pchk-locations', ['pchk-core']).config(function ($stateProvider) {
        $stateProvider.state('main.locations', {
            url: '/locations/:woeid',
            data: {
                breadcrumb: ['main.home'],
                title: 'Pollen d une location'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/locations/locations.html',
                    controller: 'LocationsCtrl as locations'
                }
            }
        });
    });

})();
