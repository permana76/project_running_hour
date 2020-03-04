app.controller('ShopController', ['$scope', '$http', 'ShopService', '$window', 'Notification', '$location', 
  function($scope, $http, ShopService, $window, Notification, $location) {
    var vm = this;

    vm.allProducts = '';

    vm.cart = $window.localStorage.getItem('cart') != null ? angular.fromJson($window.localStorage.getItem('cart')) : null;
    vm.cartTotal = vm.cart != null ? vm.cart.length : 0;
    vm.paymentDetail = angular.fromJson($window.localStorage.getItem('cart'));

    vm.discount = 10;

    //payment variable
    vm.fullName = ''
    vm.contact = ''
    vm.email = ''
    vm.address = ''

    vm.cardNumber = ''
    vm.cardMonth = ''
    vm.cardYear = ''
    vm.cardCvc = ''
    vm.amount = 0
    
    vm.step = 1

    vm.subtotal = 0;

    //redirect shop on payment if cart is null
    if($location.path() === '/shop/payment') {
      if(vm.cart == null) {
        $window.location.href = '/shop';
      }
    }
      
    //count subtotal
    for (var i = 0; i < vm.cartTotal; i++) { 
      if(vm.cart[i].discount !== 0){
        vm.subtotal += vm.cart[i].quantity * (vm.cart[i].price - (vm.cart[i].price * vm.cart[i].discount / 100))
      } else {
        vm.subtotal += vm.cart[i].quantity * vm.cart[i].price
      }
    }

    vm.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    vm.cardYears = []
    for (yearNow = new Date().getFullYear(); yearNow <= new Date().getFullYear() + 10; yearNow++) {
      vm.cardYears.push(yearNow);
    }


    vm.limit = 16;
    vm.currentPage = 1;
    vm.totalPages = 1;
    vm.pages = []

    //get Total Pages
    ShopService.getProducts().then(function(data) {
      vm.totalPages = Math.ceil(data.length / vm.limit)
      for(var i = 1; i <= vm.totalPages; i++){
        vm.pages.push(i)
      }
    });

    vm.setPage = setPage;
    vm.setPage(1);

    function setPage(page) {
      vm.allProductsLoading = true;

      var skip = (page - 1) * vm.limit
      vm.currentPage = page

      //get Data
      ShopService.getProducts(vm.limit, skip).then(function(data) {
        vm.allProducts = data;
        vm.allProductsLoading = false;
      });
    }



    vm.addLocalStorage = function() {
      $window.localStorage.setItem('cart', angular.toJson(vm.allProducts));
    }

    vm.clearLocalStorage = function() {
      $window.localStorage.clear();
    }

    vm.getDiscountResult = function(price, discount, quantity) {
      if (quantity != null) {
        return ((price - (price * discount / 100)) * quantity).toFixed(2)  
      } else {
        return (price - (price * discount / 100)).toFixed(2)        
      }
    };


    vm.getCardType = function() {
      if (vm.cardNumber !== null || vm.cardNumber !== '' || vm.cardNumber !== 0) {
        // visa
        var re = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if (re.test(vm.cardNumber))
          return "Visa";

        // Mastercard 
        // Updated for Mastercard 2017 BINs expansion
        re = /^(?:5[1-5][0-9]{14})$/;
        if (re.test(vm.cardNumber))
          return "Mastercard";

        // AMEX
        re = /^(?:3[47][0-9]{13})$/;
        if (re.test(vm.cardNumber))
          return "Amex";

        // Discover
        re = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
        if (re.test(vm.cardNumber))
          return "Discover";

        // Diners
        re = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
        if (re.test(vm.cardNumber))
          return "Diners";
        // JCB
        re = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
        if (re.test(vm.cardNumber))
          return "JCB";
      }

      return "";
    }

    vm.next = function() {
      vm.step++;

      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    vm.back = function() {
      vm.step--;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    vm.submitForm = function() {
      vm.loading(true);

      Stripe.card.createToken({
        "number": vm.cardNumber,
        "exp_month": vm.cardMonth,
        "exp_year": vm.cardYear,
        "cvc": vm.cardCvc
      }, function(status, response) {
        console.log("token success");

        var dataJSON = JSON.stringify({
          "stripeToken": response.id,
          "name": vm.fullName,
          "phoneNumber": vm.contact,
          "email": vm.email,
          "address": vm.address,
          "products": vm.cart
        });
        $http({
            url: 'https://project-rh-backend-dev.herokuapp.com/api/public/transactions?amount=' + vm.subtotal.toFixed(2) + '&currency=sgd&description="Running Hour 2018 Shop Payment"',
            method: "POST",
            data: dataJSON
          })
          .then(
            function(response) {
              $window.localStorage.clear();
              vm.loading(false);
              vm.cartTotal = null;
              vm.step = 3;
            },
            function(response) {
              vm.loading(false);
              Notification.error({ message: response.data.message, positionY: 'top', positionX: 'left' });
            }
          );
      });
    };


    vm.loading = function(status) {
      if (status) {
        document.getElementById("loading").style.display = "block";
        document.body.style.overflowY = "hidden";
      } else {
        document.getElementById("loading").style.display = "none";
        document.body.style.overflowY = "auto";
      }
    }
  }
]);