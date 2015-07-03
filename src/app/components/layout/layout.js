'use strict';

(function () {
    angular.module('pchk-layout', ['pchk-core']).config(function ($stateProvider) {
        $stateProvider.state('layout', {
            templateUrl: 'app/components/layout/layout.html'
        }).state('main', {
            parent: 'layout',
            abstract: true,
            views: {
                'header': {
                    templateUrl: 'app/components/layout/header/header.html',
                    controller: 'HeaderCtrl as header'
                },
                'footer': {
                    templateUrl: 'app/components/layout/footer/footer.html',
                    controller: 'FooterCtrl as footer'
                }
            }
        });
    });
})();
