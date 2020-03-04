app.controller('HeaderController', ['$scope',
  function($scope) {
    var vm = this;

    vm.menuOpen = false;
    vm.runningCollapsed = true;
   	vm.calendarCollapsed = true;
    vm.aboutCollapsed = true;
    vm.articlesCollapsed = true;
    vm.galleryCollapsed = true;
    vm.faqCollapsed = true;

    $scope.onSwipeLeft = function(ev) {
    	vm.menuOpen = true;
    }
  }
]);