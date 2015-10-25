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
    angular.module('pchk-home').constant('europeanCountries', [23424950,23424897,23424925,23424744,23424892,23424986,23424819,23424853,23424833,26812346,23424742,23424957,20069817,23424843,23424761,23424879,23424945,20069818,23424881,23424757,23424771,23424750,23424969,23424909,23424844,23424829,23424975,23424933,23424810,23424877,23424803,23424885,23424923,23424796,23424976,23424875,23424765,23424874,23424805,23424954,23424910,23424845,23424812]);
})();

