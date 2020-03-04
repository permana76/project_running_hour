app.constant('constant', {
  EVENT_YEAR: 2020,
  RESIDENCY_STATUSES: {
    RESIDENCY_STATUS_SINGAPOREAN: 'Singaporean/PR',
    RESIDENCY_STATUS_MALAYSIA: 'Malaysia',
    RESIDENCY_STATUS_INDONESIA: 'Indonesia',
    RESIDENCY_STATUS_THAILAND: 'Thailand',
    RESIDENCY_STATUS_PHILLIPINES: 'Phillipines',
    RESIDENCY_STATUS_AUSTRALIA: 'Australia',
    RESIDENCY_STATUS_USA: 'USA',
    RESIDENCY_STATUS_CHINA: 'China',
    RESIDENCY_STATUS_EUROPE: 'Europe',
    RESIDENCY_STATUS_NEW_ZEALAND: 'New Zealand',
    RESIDENCY_STATUS_JAPAN: 'Japan',
    RESIDENCY_STATUS_KOREA: 'Korea',
    RESIDENCY_STATUS_OTHERS: 'Others'
  },
  RACE: {
    RACE_CHINESE: 'Chinese',
    RACE_MALAY: 'Malay',
    RACE_INDIAN: 'Indian',
    RACE_OTHERS: 'Others'
  },
  GENDERS: ['Male', 'Female'],
  RACE_CATEGORIES: {
    RACE_CATEGORY_10KM: {
      VALUE: '10km Run (13 years old and above)',
      LABEL: '10km Run (13 years old and above)',
      TIME: '5:00pm',
      PWSN: 'FOC',
      CAREGIVER: 'FOC',
      FEE: 45,
      EARLY_BIRD_FEE: 40,
      CLOSED: false
    }, 
    RACE_CATEGORY_5KM: {
      VALUE: '5km Walk or Run (8 years old and above)',
      LABEL: '5km Walk or Run (8 years old and above)',
      TIME: '5:15pm',
      PWSN: 'FOC',
      CAREGIVER: 'FOC',
      FEE: 40,
      EARLY_BIRD_FEE: 35,
      CLOSED: false
    }, 
    RACE_CATEGORY_3KM: {
      VALUE: '3km Walk or Run (6 years old and above)',
      LABEL: '3km Walk or Run (6 years old and above)',
      TIME: '5:30pm',
      PWSN: 'FOC',
      CAREGIVER: 'FOC',
      FEE: 35,
      EARLY_BIRD_FEE: 30,
      CLOSED: false
    },  
    RACE_CATEGORY_PERSONALISED_DISTANCE: {
      VALUE: 'Personalised Distance (Below 3km, no age limit)',
      LABEL: 'Personalised Distance (Below 3km, no age limit)',
      TIME: '5:30pm',
      PWSN: 'FOC',
      CAREGIVER: 'FOC',
      FEE: 35,
      EARLY_BIRD_FEE: 30,
      CLOSED: false
    }, 
    RACE_CATEGORY_20KM_NO_BIKE: {
      VALUE: '20km Cycling (Using my own bike and helmet)',
      LABEL: '20km Cycling (Using my own bike and helmet)',
      TIME: '2:00pm',
      PWSN: 'NA',
      CAREGIVER: 'NA',
      FEE: 45,
      EARLY_BIRD_FEE: 40,
      CLOSED: false
    }, 
    RACE_CATEGORY_20KM_SINGLE_BIKE: {
      VALUE: '20km Cycling (Need rental bike with helmet)',
      LABEL: '20km Cycling (Need rental bike with helmet) (Provided at a cost of $8)',
      TIME: '2:00pm',
      PWSN: 'FOC',
      CAREGIVER: 'FOC',
      FEE: 53,
      EARLY_BIRD_FEE: 48,
      CLOSED: false
    },
    RACE_CATEGORY_20KM_TANDEM_BIKE: {
      VALUE: 'Tandem Cycling (For PWSN only)',
      LABEL: 'Tandem Cycling (For PWSN only) (Bike Captain will be assigned)',
      TIME: '2:00pm',
      PWSN: 'FOC',
      CAREGIVER: 'FOC',
      FEE: null,
      EARLY_BIRD_FEE: null,
      CLOSED: false
    }, 
  },
  BLOOD_TYPES: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
  WORKSHOPS: {
    DATE_ONE: {
      LABEL: 'Saturday, 01 August 2020; 1.00pm - 3.00pm',
      DAY: 'Saturday, 01 August 2020',
      TIME: '1.00pm - 3.00pm',
      DATE: '2020-8-01',
      FULLY_BOOKED: false
    }, 
    DATE_TWO: {
      LABEL: 'Sunday, 02 August 2020; 1.00pm - 3.00pm',
      DAY: 'Sunday, 02 August 2020',
      TIME: '1.00pm - 3.00pm',
      DATE: '2020-8-02',
      FULLY_BOOKED: false
    }, 
    NOT_ATTENDING: {
      LABEL: 'Not attending',
      DATE: 'NOT_ATTENDING'
    }
  },
  // (years, month-1, days, hours)
  REGISTRATION_DATE: new Date(2019, 6, 11, 24),
  EVENT_ENDED: false,
  RACE_PACK_COLLECTION_DATE: new Date(2019, 6, 14),
  RACE_DATE: new Date(2019, 6, 28),
  EARLY_BIRD_LAST_DATE: new Date(2019, 4, 16), //Deadline - 1 day, format (year, month - 1, day)
  DEFAULT_COUNTRY_PHONE_CODE: '+65',
  
  DISCOUNT_TYPES: {
    DISCOUNT_TYPE_PERCENTAGE: 'Discount Percentage', 
    DISCOUNT_TYPE_PRICE: 'Discount Price'
  },
  
  MAIN_URL: 'https://staging-dashboard-rh.herokuapp.com'
  // MAIN_URL: 'https://dev-dashboard.runninghour.com'
  // MAIN_URL: 'http://localhost:3000'
});
app.controller('RegistrationController', ['$scope', '$http', 'Notification', '$location', '$anchorScroll', 'constant',
  function($scope, $http, Notification, $location, $anchorScroll, constant) {
    var vm = this;
    var yearNow;
    var data = [];
    var mainUrl = constant.MAIN_URL;

    vm.eventYear = constant.EVENT_YEAR;
    vm.residencyStatuses = constant.RESIDENCY_STATUSES;
    vm.races = constant.RACE;
    vm.genders = constant.GENDERS;
    vm.workshops = constant.WORKSHOPS;
    vm.raceCategories = constant.RACE_CATEGORIES;

    //Test Key : pk_live_87hsUccNnfSlg8w2drH8OrYb
    Stripe.setPublishableKey('pk_test_aq7AsIcKJox5mx6aXRjf0ULU');

    //tempraryModal
    vm.stripeToken = ''
    vm.residency = ''
    vm.race = ''
    vm.identityNo = ''
    vm.day = ''
    vm.month = ''
    vm.year = ''
    vm.yearOfBirth = ''
    vm.gender = ''
    vm.promocode = ''
    vm.raceCategory = ''
    vm.participateWorkshop = ''
    vm.participateWorkshopDate = ''
    vm.fullName = ''
    vm.firstName = ''
    vm.lastName = ''
    vm.countryPhoneCode = constant.DEFAULT_COUNTRY_PHONE_CODE;
    vm.contact = ''
    vm.phoneNumber
    vm.email = ''
    vm.bloodType = ''
    vm.tshirtSize = ''
    vm.address = ''
    vm.postalCode = ''
    vm.unitNumber = ''
    vm.floorNo = ''
    vm.streetName = ''
    vm.allergie = ''
    vm.medicalCondition = ''
    vm.medicalDeclaration = ''
    vm.buyMerchandise = ''
    vm.selectedMerchandises = [];
    vm.emergencyName = ''
    vm.emergencyRelation = ''
    vm.emergencyContact = ''
    vm.agree = false
    vm.cardNumber = ''
    vm.cardMonth = ''
    vm.cardYear = ''
    vm.cardCvc = ''
    vm.amount = '';
    vm.earlyBirdLastDate = constant.EARLY_BIRD_LAST_DATE; //Deadline - 1 day, format (year, month - 1, day)
    vm.amountPackage = (new Date() <= vm.earlyBirdLastDate) ? 'Early Bird' : 'Normal Registration';
    vm.registerStatus = false;
    vm.raceAmount = 0
    vm.discount = 0
    vm.discountPrice = 0

    vm.step =   1;
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

    vm.bloodTypes = constant.BLOOD_TYPES;

    vm.getCountryCodes = function() {
      $http({
        url: 'https://restcountries.eu/rest/v2/all',
        method: "GET"
      })
      .then(function(response) {
        vm.countryCodes = response.data;
      },
      function(response) {
        vm.countryCodes = [];
      });
    };
    vm.getCountryCodes();

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

    vm.getMerchandises = function() {
      $http({
        url: mainUrl+'/api/public/merchandises',
        method: "GET"
      })
      .then(function(response) {
        vm.merchandises = response.data.merchandises;
        angular.forEach(vm.merchandises, function(merchandise, index) {
          merchandise.quantity = 1;
          // merchandise.soldOut = false
          // merchandise.soldOut = true
        });
      },
      function(response) {
        vm.merchandises = [];
      });
    };
    vm.getMerchandises();
    
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

    vm.getAmount = function() {
      angular.forEach(vm.raceCategories, function(raceCategory) {
        if(vm.raceCategory === raceCategory.VALUE) {
          vm.amount = (new Date() <= vm.earlyBirdLastDate) ? raceCategory.EARLY_BIRD_FEE : raceCategory.FEE;
        }
      });
      return vm.amount;
    };

    vm.next = function() {
      if (vm.validPromoCode) {
        vm.step++;
        vm.checkPackage();
        vm.getPromoCode();
        vm.checkMerchandise();
        vm.amount -= vm.discountPrice;
        vm.registerStatus = (vm.amount === 0) ? true : false;
        if(vm.registerStatus) vm.submitPromoCode()

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } else {
        vm.getPromoCode(true);
      }
    };

    vm.back = function() {
      vm.step--;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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

    vm.checkPackage = function() {
      angular.forEach(vm.raceCategories, function(raceCategory) {
        if(vm.raceCategory === raceCategory.VALUE) {
          vm.amount = (new Date() <= vm.earlyBirdLastDate) ? raceCategory.EARLY_BIRD_FEE : raceCategory.FEE;
        }
      });
      vm.raceAmount = vm.amount;
    };

    vm.checkMerchandise = function() {
      vm.selectedMerchandises = [];
      angular.forEach(vm.merchandises, function(merchandise, index) {
        if(merchandise.selected) {
          if(merchandise.hasVarianSize === 'Yes') {
            angular.forEach(vm.tshirtSizes, function(size, index) {
              if(size.quantity > 0){
                let newMerchandise = JSON.parse(JSON.stringify(merchandise));
                delete newMerchandise.imageUrl;
                newMerchandise.quantity = size.quantity;
                newMerchandise.varian = size.name;
                vm.selectedMerchandises.push(newMerchandise);
                vm.amount += (merchandise.price * size.quantity);
              }
            });
          } else {
            let newMerchandise = JSON.parse(JSON.stringify(merchandise));
            delete newMerchandise.imageUrl;
            vm.selectedMerchandises.push(newMerchandise);
            vm.amount += (merchandise.price * merchandise.quantity);
          }
        }
      });
    };

    vm.getPromoCode = function(notif=false, checkFOC=false) {
      if(vm.promocode !== '') {
        $http({
          url: mainUrl+'/api/public/promo-codes/' + vm.promocode,
          method: "GET"
        })
        .then(function(response) {
            vm.discount = response.data.promoCode.discount;
            if (response.data.promoCode.discountType === constant.DISCOUNT_TYPES.DISCOUNT_TYPE_PERCENTAGE) {
              vm.discountPrice = vm.discount / 100 * vm.raceAmount;
            } else if (response.data.promoCode.discountType === constant.DISCOUNT_TYPES.DISCOUNT_TYPE_PRICE) {
              vm.discountPrice = vm.discount;
            }
            
            vm.validPromoCode = true;
            if(notif) Notification.success({ message: response.data.message, positionY: 'top', positionX: 'left' });
          },
          function(err) {
            vm.discount = 0;
            vm.discountPrice = 0;

            vm.validPromoCode = false;
            if(notif) Notification.error({ message: err.data.message, positionY: 'top', positionX: 'left' });
          });
      } else {
        vm.discount = 0;
        vm.discountPrice = 0;

        vm.validPromoCode = true;
      }
    };

    // $scope.$watch('vm.postalCode.length', function(newValue, oldValue){
    //   if(newValue == 6){
    //     $http({
    //       url: 'https://developers.onemap.sg/commonapi/search?searchVal='+vm.postalCode+'&returnGeom=N&getAddrDetails=Y&pageNum=1',
    //       method: "GET"
    //     })
    //     .then(function(response) {
    //         var result = response.data.results[0];
    //         if(response.data.found > 0 ) {
    //           vm.floorNo = result.BUILDING;
    //           vm.streetName = result.BLK_NO + ' ' + result.ROAD_NAME;
    //         } else {
    //           vm.floorNo = '';
    //           vm.streetName = '';
    //         }
    //       },
    //       function(response) {
    //         Notification.error({ message: 'No Address Found', positionY: 'top', positionX: 'left' });
    //       });
    //   } else {
    //     vm.floorNo = '';
    //     vm.streetName = '';
    //   }
    // });

    vm.submitForm = function() {
      var month = parseInt(vm.cardMonth, 10) + 1;
      var workshopDate = vm.participateWorkshopDate === constant.WORKSHOPS.NOT_ATTENDING ? '' : new Date(vm.participateWorkshopDate);
      vm.buyMerchandise = vm.selectedMerchandises.length > 0 ? 'yes' : 'no';
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
            "residencyStatus": vm.residency,
            "race": vm.race,
            "identityNo": vm.identityNo,
            "yearOfBirth": vm.yearOfBirth,
            "dateOfBirth": new Date(Date.UTC(vm.year, vm.month, vm.day)),
            "gender": vm.gender,
            "promoCode": vm.promocode,
            "raceCategory": vm.raceCategory,
            "participateWorkshopDate": new Date(Date.UTC(workshopDate.getFullYear(), workshopDate.getMonth(), workshopDate.getDate())),
            "fullName": vm.fullName,
            "firstName": vm.firstName,
            "lastName": vm.lastName,
            "contactNumber": vm.countryPhoneCode + '' + vm.contact,
            "phoneNumber": vm.phoneNumber,
            "email": vm.email,
            "bloodType": vm.bloodType,
            "tShirtSize": vm.tshirtSize,
            "address": vm.address,
            "postalCode": vm.postalCode,
            "unitNumber": vm.unitNumber,
            "floorUnit": vm.floorNo,
            "blockStreet": vm.streetName,
            "allergies": vm.allergie,
            "medicalConditions": vm.medicalCondition,
            "medicalDeclaration": vm.medicalDeclaration,
            "buyMerchandise": vm.buyMerchandise,
            "selectedMerchandises": vm.selectedMerchandises,
            "amount": vm.amount,
            "raceAmount": vm.raceAmount,
            "discountPrice": vm.discountPrice,
            "emergency": {
              "name": vm.emergencyName,
              "relationship": vm.emergencyRelation,
              "contactNo": vm.emergencyContact,
            }
          });
          $http({
              url: mainUrl+'/api/public/registrations?amount=' + vm.amount + '&currency=sgd&description="Running Hour 2020 Payment"',
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

    vm.submitPromoCode = function() {
      var workshopDate = vm.participateWorkshopDate === constant.WORKSHOPS.NOT_ATTENDING ? '' : new Date(vm.participateWorkshopDate);
      vm.buyMerchandise = vm.selectedMerchandises.length > 0 ? 'yes' : 'no';
      vm.loading(true);
      vm.amount = 0;

      var dataJSON = JSON.stringify({
        "stripeToken": '',
        "residencyStatus": vm.residency,
        "race": vm.race,
        "identityNo": vm.identityNo,
        "yearOfBirth": vm.yearOfBirth,
        "dateOfBirth": new Date(Date.UTC(vm.year, vm.month, vm.day)),
        "gender": vm.gender,
        "promoCode": vm.promocode,
        "raceCategory": vm.raceCategory,
        "participateWorkshopDate": new Date(Date.UTC(workshopDate.getFullYear(), workshopDate.getMonth(), workshopDate.getDate())),
        "fullName": vm.fullName,
        "firstName": vm.firstName,
        "lastName": vm.lastName,
        "contactNumber": vm.countryPhoneCode + '' + vm.contact,
        "phoneNumber": vm.phoneNumber,
        "email": vm.email,
        "bloodType": vm.bloodType,
        "tShirtSize": vm.tshirtSize,
        "address": vm.address,
        "postalCode": vm.postalCode,
        "unitNumber": vm.unitNumber,
        "floorUnit": vm.floorNo,
        "blockStreet": vm.streetName,
        "allergies": vm.allergie,
        "medicalConditions": vm.medicalCondition,
        "medicalDeclaration": vm.medicalDeclaration,
        "buyMerchandise": vm.buyMerchandise,
        "selectedMerchandises": vm.selectedMerchandises,
        "amount": vm.amount,
        "raceAmount": vm.raceAmount,
        "discountPrice": vm.discountPrice,
        "emergency": {
          "name": vm.emergencyName,
          "relationship": vm.emergencyRelation,
          "contactNo": vm.emergencyContact,
        }
      });

      $http({
          url: mainUrl+'/api/public/registrations?amount=' + vm.amount + '&currency=sgd&description="Running Hour 2020 Payment"',
          method: "POST",
          data: dataJSON
        })
        .then(
          function(response) {
            vm.step = 4;
            vm.loading(false);
          },
          function(response) {
            vm.promocode = ''
            vm.step = 1;

            setTimeout(function() {
              $anchorScroll('birthDate');
            }, 100);
            setTimeout(function() {
              document.getElementById("promoCodeInput").focus();
            }, 200);

            vm.loading(false);
            Notification.error({ message: response.data.message, positionY: 'top', positionX: 'left' });
          });
    };
  }
]);