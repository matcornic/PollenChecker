'use strict';

(function () {
    angular.module('pchk-home').controller('HomeCtrl', function (Restangular) {

        var vm = this;

        Restangular.one('locations',766273).get().then(function(result) {
          vm.location = result;
          console.log(vm.location);
        });
    });
})();

