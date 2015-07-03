'use strict';

(function () {
    angular.module('pchk-error', ['pchk-core']).config(function ($stateProvider) {
        $stateProvider.state('error', {
            url: '/404',
            templateUrl: 'app/error/404.html'
        });
    });
})();
