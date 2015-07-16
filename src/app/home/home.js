'use strict';

(function () {
    angular.module('pchk-home', ['pchk-core', 'pchk-directives']).config(function ($stateProvider) {
        $stateProvider.state('main.home', {
            url: '/',
            data: {
                breadcrumb: [],
                title: 'Pollen Checker'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeCtrl as home'
                }
            }
        });
    });

})();

