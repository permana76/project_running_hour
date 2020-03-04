app.controller('HomeController', ['$scope', 'ArticlesService', '$interval', '$sce', 'constant',
  function($scope, ArticlesService, $interval, $sce, constant) {
    var vm = this;

    vm.articles = ArticlesService.getArticles();

    vm.mainCarousel = [{
      id: 0,
      url: '/',
      image: 'resources/img/banner6new.jpg',
      imageM: 'resources/img/banner6new.jpg',
      label: 'Running Hour 2018'
    }, {
      id: 1,
      url: '/#!/race2017#winner',
      image: 'resources/img/banner3new.jpg',
      imageM: 'resources/img/banner3bnew.jpg',
      label: 'Running Hour 2018'
    }];

    vm.today = new Date();
    // (years, month-1, days, hours)
    vm.registerationDate = constant.REGISTRATION_DATE;
    vm.eventEnded = constant.EVENT_ENDED;
    calculateDays();

    vm.sponsorCarousel = [{
      id: 0,
      title: 'Official Tech Partner',
      label: 'Xcidic',
      image: 'resources/img/sponsor/xcidic.png'
    }, {
      id: 1,
      title: 'Official PR Partner',
      label: 'Asia PR Werkz',
      image: 'resources/img/sponsor/logo-asia.jpg'
    }, {
      id: 2,
      title: 'Official Apparel Partner',
      label: 'Compress Sport',
      image: 'resources/img/sponsor/compressport.png'
    }, {
      id: 3,
      title: 'Official Sport Partner',
      label: 'Sports Hub Library',
      image: 'resources/img/sponsor/sportshub.png'
    }];

    $interval(function() {
      if (!vm.eventEnded) {
        calculateDays();
      }
    }, 1000);

    function calculateDays() {
      vm.today = new Date();

      var difference = vm.registerationDate - vm.today;

      if (difference > 0) {
        var delta = Math.abs(difference) / 1000;

        vm.days = Math.floor(delta / 86400);
        delta -= vm.days * 86400;

        vm.hours = Math.floor(delta / 3600) % 24;
        delta -= vm.hours * 3600;

        vm.minutes = Math.floor(delta / 60) % 60;
        delta -= vm.minutes * 60;

        vm.seconds = Math.floor(delta % 60);
      } else {
        vm.eventEnded = true;
      }
    };
  }
]);