app.controller('ConfirmationController', ['$scope', '$http', 'Notification', 'constant',
  function($scope, $http, Notification, constant) {
    var vm = this;

    vm.identityNo = ''

    vm.step = 0;
    vm.earlyBirdLastDate = constant.EARLY_BIRD_LAST_DATE;
    vm.raceCategories = constant.RACE_CATEGORIES;
    vm.checkConfirmationSlip = function() {
      vm.step = 1;

      $http({
        method: 'GET',
        url: constant.MAIN_URL + '/api/public/registrations/' + vm.identityNo + '/' + constant.EVENT_YEAR
      }).then(
        function (response) {

          vm.data = response.data 

          vm.registrationType = (vm.data.promoCode === null) ? "Payment" : "Code";
          vm.paymentMethod = (vm.data.groupName) ? "Manual" : "Online";

          var dateOfBirthTemp = new Date(vm.data.dateOfBirth).toISOString().substring(0, 10).split("-");
          vm.dateOfBirth = dateOfBirthTemp[2] + "/" + dateOfBirthTemp[1] + "/" + dateOfBirthTemp[0];

          var createdDateTemp = new Date(vm.data.created);
          vm.createdDate = createdDateTemp.toLocaleDateString('en-SG') + " " + createdDateTemp.toLocaleTimeString('en-SG') + " (GMT+8)";

          angular.forEach(vm.raceCategories, function(raceCategory) {
            if(vm.data.raceCategory === raceCategory.VALUE) {
              vm.eventTime = raceCategory.TIME + ' flag off';
            }
          });

          vm.step = 2;
        },
        function (response) {
          vm.step = 0;

          vm.identityNo = '';
          
          Notification.error({ message: 'The Identity Number is not registered.', positionY: 'top', positionX: 'left' });
        });
    }
  }
]);