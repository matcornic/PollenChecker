'use strict';

(function () {
    angular.module('pollenChecker', [
        'pchk-core',
        'pchk-layout',
        'pchk-error',
        'pchk-home',
        'pchk-locations'
    ]).config(function ($urlRouterProvider, RestangularProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/404');
        RestangularProvider.setBaseUrl('https://pollencheck.p.mashape.com/api/1/');
        RestangularProvider.setDefaultHeaders({'X-Mashape-Key':'bOjN5CeQm1mshRWRxL9A7LpJcGnVp1i3YJKjsnXjhLKw9XJ5MP'});
    });
})();

