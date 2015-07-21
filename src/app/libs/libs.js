'use strict';

function updateBackground(url) {
  var scope = angular.element($("#bg")).scope();
  _.defer(function () {
    scope.$apply(function () {
      console.log(scope);
      scope.bg = url;
    });
  });
};
