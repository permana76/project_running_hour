'use strict';

app.directive('slider', function($interval, $filter, $rootScope, $timeout) {
  return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'resources/views/templates/slider.tpl.html',
    scope: {
      ngModel: '=?ngModel'
    },
    link: function(scope, element, attrs) {
      var index = 0;
      var slideLength = $rootScope.isMobile ? 1 : 5;
      var timer = $interval(function() {
        onUpdate();
      }, 5000);

      scope.slideFilter = $filter('limitTo')(scope.ngModel, slideLength, index);

      function onUpdate() {
        var length = 0;

        if (index >= scope.ngModel.length) {
          index = 0;
        } else {
          index++;
        }
        scope.slideFilter = $filter('limitTo')(scope.ngModel, slideLength, index);
        length = scope.slideFilter.length;
        if (length < slideLength) {
          for (var i = 0; i < slideLength - length; i++) {
            scope.slideFilter.push(scope.ngModel[i]);
          }
        }
      };

      scope.next = function() {
        onUpdate();
      };
    }
  };
});