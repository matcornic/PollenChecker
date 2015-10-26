'use strict';

function updateBackground(url) {
  var scope = angular.element($("#bg")).scope();
  _.defer(function () {
    scope.$apply(function () {
      scope.bg = url;
    });
  });
};
