'use strict';

(function () {
    angular.module('pchk-requests', ['pchk-core']).config(function ($stateProvider) {
        $stateProvider.state('main.requests', {
            url: '/requests',
            data: {
                breadcrumb: ['main.home'],
                title: 'Liste des requêtes'
            },
            views: {
                'content@layout': {
                    templateUrl: 'app/requests/requests.html',
                    controller: 'RequestsCtrl as requests'
                }
            }
        });
    });

})();
