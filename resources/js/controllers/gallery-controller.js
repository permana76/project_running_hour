app.controller('GalleryController', ['$scope', '$mdDialog', 'GalleryService', 'galleryYear',
  function($scope, $mdDialog, GalleryService, galleryYear) {
    var vm = this;

    vm.pageTitle = galleryYear;
    vm.galleryImages = GalleryService.getGallery(galleryYear);
    vm.index = 0;

    vm.view = function(id, ev) {
      vm.index = id;

      $mdDialog.show({
        contentElement: '#viewImage',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    };

    vm.close = function() {
      $mdDialog.hide();
    };

    vm.previous = function() {
      if (vm.index <= 0) {
        vm.index = vm.galleryImages.length - 1;
      } else {
        vm.index--;
      }
    };

    vm.next = function() {
      if (vm.index >= vm.galleryImages.length - 1) {
        vm.index = 0;
      } else {
        vm.index++;
      }
    };
  }
]);