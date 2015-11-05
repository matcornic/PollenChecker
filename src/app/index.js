'use strict';

(function () {
    angular.module('pollenChecker', [
        'pchk-core',
        'pchk-layout',
        'pchk-error',
        'pchk-home',
        'pchk-locations'
    ]).config(function ($urlRouterProvider, RestangularProvider, forecastAppId) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/404');
        RestangularProvider.setBaseUrl('https://pollencheck.p.mashape.com/api/1/');
        RestangularProvider.setDefaultHeaders({'X-Mashape-Key':forecastAppId});
    });

})();

