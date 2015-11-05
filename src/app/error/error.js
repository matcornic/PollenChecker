'use strict';

(function () {
  angular.module('pchk-error', ['pchk-core', 'pchk-directives']).config(function ($stateProvider) {
    $stateProvider.state('main.error', {
      url: '/404',
      data: {
        breadcrumb: [],
        title: '404 Error'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/error/404.html',
          controller: 'ErrorCtrl as err'
        }
      }
    });
  });
})();
