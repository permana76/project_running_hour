app.controller('ShopCartController', ['$scope', '$window', '$filter', 'ShopService',
  function($scope, $window, $filter, ShopService) {
    var vm = this;

    vm.subtotal = 0;

    vm.otherProducts = []
    vm.otherProductsLoading = true;

    vm.cart = $window.localStorage.getItem('cart') != null ? angular.fromJson($window.localStorage.getItem('cart')) : null;
    vm.cartTotal = vm.cart != null ? vm.cart.length : 0;


    ShopService.getProducts().then(function(data) {
      var index = 0;
      var cartSlug = []

      for (var i = 0; i < vm.cartTotal; i++) {
        cartSlug[i] = vm.cart[i].slug
      }

      for (var i = 0; i < data.length; i++) {
        if (vm.cart != null && cartSlug.indexOf(data[i].slug) <= -1) {
          vm.otherProducts[index] = data[i]
          index++
        }
        if(index === 4) {
          break
        }
      }
      vm.otherProductsLoading = false;
    });

    //count subtotal
    for (var i = 0; i < vm.cartTotal; i++) {
      if (vm.cart[i].discount !== 0) {
        vm.subtotal += vm.cart[i].quantity * (vm.cart[i].price - (vm.cart[i].price * vm.cart[i].discount / 100))
      } else {
        vm.subtotal += vm.cart[i].quantity * vm.cart[i].price
      }
    }

    vm.getDiscountResult = function(price, discount, quantity) {
      if (quantity != null) {
        return ((price - (price * discount / 100)) * quantity).toFixed(2)  
      } else {
        return (price - (price * discount / 100)).toFixed(2)        
      }
    };

    vm.removeProduct = function(i) {

      var tempCart = angular.fromJson($window.localStorage.getItem('cart'));

      tempCart.splice(i, 1);

      if (tempCart.length === 0) {

        $window.localStorage.clear();
      } else {

        $window.localStorage.setItem('cart', angular.toJson(tempCart));
      }
      window.location.reload();
    }
  }
]);