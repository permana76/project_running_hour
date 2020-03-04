app.controller('PaymentController', ['$scope', '$http', '$state', '$stateParams', 'Notification', '$location', '$anchorScroll', 'constant',
  function($scope, $http, $state, $stateParams, Notification, $location, $anchorScroll, constant) {
    var vm = this;
    var yearNow;
    var data = [];
    var mainUrl = constant.MAIN_URL;

    var _id = $stateParams._id;
    $scope.state = $state.current
    $scope.params = $stateParams;

    vm.eventYear = constant.EVENT_YEAR;
    vm.residencyStatuses = constant.RESIDENCY_STATUSES;
    vm.races = constant.RACE;
    vm.genders = constant.GENDERS;
    vm.workshops = constant.WORKSHOPS;
    vm.raceCategories = constant.RACE_CATEGORIES;
    // vm.raceCategories.RACE_CATEGORY_20KM_TANDEM_BIKE;

    //Test Key : pk_test_aq7AsIcKJox5mx6aXRjf0ULU
    // TODO change to live for prod | pk_live_87hsUccNnfSlg8w2drH8OrYb
    Stripe.setPublishableKey('pk_test_aq7AsIcKJox5mx6aXRjf0ULU');
    
    //tempraryModal
    vm.stripeToken = ''
    vm.day = ''
    vm.month = ''
    vm.year = ''
    vm.data = []
    vm.data.raceCategory = ''
    vm.agree = false
    vm.cardNumber = ''
    vm.cardMonth = ''
    vm.cardYear = ''
    vm.cardCvc = ''
    vm.data.amount = '';
    vm.earlyBirdLastDate = constant.EARLY_BIRD_LAST_DATE; //Deadline - 1 day, format (year, month - 1, day)
    vm.amountPackage = (new Date() <= vm.earlyBirdLastDate) ? 'Early Bird' : 'Normal Registration';
    vm.registerStatus = false;
    vm.data.raceAmount = 0
    vm.data.discount = 0
    vm.data.discountPrice = 0

    vm.step =   3;
    vm.validPromoCode = true;

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

    vm.years = []
    for (yearNow = new Date().getFullYear(); yearNow >= new Date().getFullYear() - 100; yearNow--) {
      vm.years.push(yearNow);
    }

    vm.cardYears = []
    for (yearNow = new Date().getFullYear(); yearNow <= new Date().getFullYear() + 10; yearNow++) {
      vm.cardYears.push(yearNow);
    }

    vm.merchandises = [];
    vm.getMerchandises = function() {
      $http({
        url: mainUrl+'/api/public/merchandises',
        method: "GET"
      })
      .then(function(response) {
        vm.merchandises = response.data.merchandises;
        angular.forEach(vm.merchandises, function(merchandise, index) {
          merchandise.quantity = 1;
        });
      },
      function(response) {
        vm.merchandises = [];
      });
    };
    vm.getMerchandises();

    vm.getTshirtSizes = function() {
      $http({
        url: mainUrl+'/api/public/tshirt-sizes',
        method: "GET"
      })
      .then(function(response) {
        vm.tshirtSizes = response.data.tshirtSizes;
      },
      function(response) {
        vm.tshirtSizes = [];
      });
    };
    vm.getTshirtSizes();
    
    vm.checkPackage = function() {
      angular.forEach(vm.raceCategories, function(raceCategory) {
        if(vm.data.raceCategory === raceCategory.VALUE) {
          vm.data.amount = (new Date() <= vm.earlyBirdLastDate) ? raceCategory.EARLY_BIRD_FEE : raceCategory.FEE
        }
      });
      vm.data.raceAmount = vm.data.amount;
    };

    vm.checkMerchandise = function() {
      angular.forEach(vm.data.selectedMerchandises, function(merchandise, index) {
        if(merchandise.selected) {
          vm.data.amount += (merchandise.price * merchandise.quantity);
        }
      });
    };

    vm.getPromoCode = function(notif=false, checkFOC=false) {
      if(vm.data.promoCode.code !== '') {
        $http({
          url: mainUrl+'/api/public/promo-codes/' + vm.data.promoCode.code,
          method: "GET"
        })
        .then(function(response) {
            vm.data.discount = response.data.promoCode.discount;
            if (response.data.promoCode.discountType === constant.DISCOUNT_TYPES.DISCOUNT_TYPE_PERCENTAGE) {
              vm.data.discountPrice = vm.data.discount / 100 * vm.data.raceAmount;
            } else if (response.data.promoCode.discountType === constant.DISCOUNT_TYPES.DISCOUNT_TYPE_PRICE) {
              vm.data.discountPrice = vm.data.discount;
            }
            
            vm.validPromoCode = true;
            if(notif) Notification.success({ message: response.data.message, positionY: 'top', positionX: 'left' });
          },
          function(err) {
            vm.data.discount = 0;
            vm.data.discountPrice = 0;

            vm.validPromoCode = false;
            if(notif) Notification.error({ message: err.data.message, positionY: 'top', positionX: 'left' });
          });
      } else {
        vm.data.discount = 0;
        vm.data.discountPrice = 0;

        vm.validPromoCode = true;
      }
    };

    vm.getAmount = function() {
      angular.forEach(vm.raceCategories, function(raceCategory) {
        if(vm.data.raceCategory === raceCategory.VALUE) {
          vm.data.amount = (new Date() <= vm.earlyBirdLastDate) ?  raceCategory.EARLY_BIRD_FEE : raceCategory.FEE;
        }
      });
      return vm.data.amount;
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

    vm.loading = function(status) {
      if (status) {
        document.getElementById("loading").style.display = "block";
        document.body.style.overflowY = "hidden";
      } else {
        document.getElementById("loading").style.display = "none";
        document.body.style.overflowY = "auto";
      }
    }

    vm.getRegistration = function(_id) {
      $http({
        method: 'GET',
        url: constant.MAIN_URL + '/api/public/registrationsId/' + _id
      }).then(
        function (response) {
          vm.data = response.data;
          if (vm.data.promoCode !== null) {
            vm.checkPackage();
            vm.getPromoCode();
            vm.checkMerchandise();
            vm.data.amount -= vm.data.discountPrice;
          } else {
            vm.checkPackage();
            vm.checkMerchandise();
          }
          console.log('vm', vm)
        });
    }
    vm.getRegistration(_id);

    vm.submitForm = function() {
      var month = parseInt(vm.cardMonth, 10) + 1;
      vm.loading(true);

      Stripe.card.createToken({
        "number": vm.cardNumber,
        "exp_month": month,
        "exp_year": vm.cardYear,
        "cvc": vm.cardCvc
      }, function(status, response) {
        if (status === 402) {
          vm.loading(false);
          Notification.error({ message: response.error.message, positionY: 'top', positionX: 'left' });
        } else {
          console.log("token success");

          var dataJSON = JSON.stringify({
            "stripeToken": response.id,
            "fullName": vm.data.fullName,
            // "firstName": vm.data.firstName,
            // "lastName": vm.data.lastName,
            "email": vm.data.email,
            "identityNo": vm.data.identityNo
          });
          $http({
              url: mainUrl+'/api/public/payment?_id='+_id+'&amount=' + vm.data.amount + '&currency=sgd&description="Running Hour 2020 Payment"',
              method: "POST",
              data: dataJSON
            })
            .then(function(response) {
                vm.step = 4;
                vm.loading(false);
              },
              function(response) {
                vm.loading(false);
                Notification.error({ message: response.data.message, positionY: 'top', positionX: 'left' });
              });
        }
      });
    };
  }
]);