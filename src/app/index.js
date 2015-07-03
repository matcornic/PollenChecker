'use strict';

(function () {
    angular.module('pollenChecker', [
        'pchk-core',
        'pchk-layout',
        'pchk-error',
        'pchk-home',
        'pchk-requests'
    ]).config(function ($urlRouterProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/404');
        RestangularProvider.setBaseUrl('https://pollencheck.p.mashape.com/api/1/');
        RestangularProvider.setDefaultHeaders({'X-Mashape-Key':'W77yjYEEhamshelfriMgjY3fwPSRp1LdNuAjsnSIMy4kcmQ0G3'});
    });
})();

