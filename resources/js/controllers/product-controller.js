app.controller('ProductController', ['$scope', '$http', 'ShopService', 'productSlug', '$sce', '$window', 
  function($scope, $http, ShopService, productSlug, $sce, $window) {
    var vm = this;

    vm.product = '';
    vm.otherProducts = [];

    vm.productLoading = true;
    vm.otherProductsLoading = true;

    vm.cartTotal = $window.localStorage.getItem('cart') !== null ? angular.fromJson($window.localStorage.getItem('cart')).length : 0;

    vm.productSize
    vm.productNotes = ''
    vm.productQty = "1"

    ShopService.getProductDetail(productSlug).then(function(data) {
      vm.product = data;

      vm.changeImageActive(vm.product.images[0].data.md.path);
      vm.productLoading = false;
    });

    ShopService.getProducts().then(function(data) {
      var index = 0;
      for (var i = 0; i < data.length; i++) { 
        if (productSlug !== data[i].slug){
          vm.otherProducts[index] = data[i]
          index++
        }
        if(index === 4) {
          break
        }
      }
      vm.otherProductsLoading = false;
    });

    vm.slickConfigmdUp = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    vm.slickConfigsmDown = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    vm.getDiscountResult = function(price, discount) {
      return (price - (price * discount / 100)).toFixed(2);
    };

    vm.addLocalStorage = function() {
      var tempCart = [];

      if($window.localStorage.getItem('cart') != null) {
        tempCart = angular.fromJson($window.localStorage.getItem('cart'));
      }

      var productTemp = {
        '_id': vm.product._id,
        'slug': vm.product.slug,
        'image': vm.product.images[0].data.md.path,
        'name': vm.product.name,
        'price': vm.product.price,
        'discount': vm.product.discount,
        'notes': vm.productNotes,
        'quantity': vm.productQty
      }

      productTemp['size'] = vm.productSize != null ? vm.productSize : null;
      productTemp['notes'] = vm.productNotes !== '' ? vm.productNotes : '-';

      var productExistIndex = -1

      //check product
      for (var i = 0; i < tempCart.length; i++) {
        if (tempCart[i]._id == productTemp._id ) {
          if(tempCart[i].size == productTemp.size) {
            productExistIndex = i
          }
        }
      }

      if (productExistIndex >= 0 ) {
        tempCart[productExistIndex].quantity = parseInt(tempCart[productExistIndex].quantity) + parseInt(productTemp.quantity)

        if(productTemp.notes != '') {
          tempCart[productExistIndex].notes = productTemp.notes          
        }
      } else {        
        tempCart.push(productTemp);
      }
      
      $window.localStorage.setItem('cart', angular.toJson(tempCart));

      // $window.location.href = '/shop/cart';
    }

    vm.changeImageActive = function(src) {
      vm.imageActive = src;
    };

    vm.renderHtml = function(html) {
      return $sce.trustAsHtml(html);
    };  
  }
]);