app.controller('RaceController', ['$scope', '$location', '$anchorScroll', 'constant', '$mdDialog',
  function($scope, $location, $anchorScroll, constant, $mdDialog) {
    var vm = this;

    if(window.location.hash) {
    	$location.hash(window.location.hash.substring(1));
      $anchorScroll();
    }

    vm.sponsorRow1 = [{
      id: 0,
      title: 'Supported by:',
      label: 'Xcidic',
      url: 'http://www.cdc.org.sg/centralsingapore',
      image: 'resources/img/sponsor/centralsingaporecdc.png'
    }, {
      id: 1,
      title: 'Sponsor:',
      label: 'JCCI',
      url: 'https://jcci.org.sg/index.php/jp/',
      image: 'resources/img/sponsor/jcci_sm.png'
    }, {
      id: 2,
      title: 'Supporting Partner:',
      label: 'Sport Cares',
      url: 'https://www.sportsingapore.gov.sg/sportcares',
      image: 'resources/img/sponsor/sport-cares.png'
    }];

    vm.sponsorRow2 = [{
      id: 0,
      title: 'Event Venue Partner',
      label: 'Punggol Safra',
      url: 'https://www.safra.sg/about-safra/overview/safra-punggol',
      image: 'resources/img/sponsor/punggol.jpeg',
      width: '100%'
    }, {
      id: 1,
      title: 'Race Pack Venue Partner',
      label: 'Sports Hub Library',
      url: 'https://sportshub.spydus.com.sg/cgi-bin/spydus.exe/MSGTRN/OPAC/HOME',
      image: 'resources/img/sponsor/sports-hub-library.png',
      width: '50%'
    }, {
      id: 2,
      title: 'Official PR Partner',
      label: 'Asia PR Werkz',
      url: 'http://www.asiaprwerkz.com/',
      image: 'resources/img/sponsor/asiaprwerkz.png',
      width: '80%'
    }, {
      id: 3,
      title: 'Supporting Partner',
      label: 'Singapore National Co-operative Operation',
      url: 'http://sncf.coop/',
      image: 'resources/img/sponsor/sncf.png',
      width: '80%'
    }];

    vm.sponsorRow3 = [{
      id: 0,
      title: 'Official Tech Partner',
      label: 'Xcidic',
      url: 'https://www.xcidic.com/',
      image: 'resources/img/sponsor/xcidic.png'
    }, {
      id: 1,
      title: 'Official Apparel',
      label: 'Compress Sport',
      url: 'http://qoolmart.com/shop-by-brands/compressport.html',
      image: 'resources/img/sponsor/compressport.png'
    }, {
      id: 2,
      title: 'Official Organiser',
      label: 'All Hearts',
      url: 'http://www.allhearts.com.sg/',
      image: 'resources/img/sponsor/all-hearts.jpg'
    }, {
      id: 3,
      title: 'Hydration Partner',
      label: 'The Seacare Hotel',
      url: 'http://theseacarehotel.com.sg/',
      image: 'resources/img/sponsor/seacare-hotel.png'
    }, {
      id: 4,
      title: 'Hydration Partner',
      label: 'Huijuan Cher',
      url: 'http://www.huijuan.isagenix.com/',
      image: 'resources/img/sponsor/huijuan.jpg'
    }];

    vm.eventYear = constant.EVENT_YEAR;
    vm.workshops = constant.WORKSHOPS;
    vm.raceCategories = constant.RACE_CATEGORIES;
    vm.workshops = constant.WORKSHOPS;

    vm.hotel = 3230;
    vm.brunch = 2345;
    vm.infrared = [1388,3167,1487,3215,1215,2681,3452,3207,22058,1018,2585,3270,2119,2629,2319,2251,1092,22096,22013,1182,2338,3373,1498,2696,2680,3457,2633,22068,22064,1353,3111,2642,1205,1255,1138,2091,1251,22012,2403,1483,2068,2137,1153,1392,1486,1347,2291,22009,2505,3425,2375,3445,2480,3242,1340,2722,3049,22043,2622,3422,2475,2143,3184,1155,2049,2149,3063,22024,2203,3108,3171,3173,3409,1079,1545,2621,2334,22037,2499,3304];
  

    var TOTAL_IMAGES_BUS_PICKUP_POINT = 8;
    var images = [];

    for (var i = 1; i <= TOTAL_IMAGES_BUS_PICKUP_POINT; i++) {
      images.push({
        label: 'Race Image',
        image: 'resources/img/race/bus-pick-up-point-' + i + '.jpg'
      });
    }

    vm.raceImages = images
    vm.index = 0;

    vm.view = function(id, ev) {
      vm.index = id;

      $mdDialog.show({
        contentElement: '#viewImageRace',
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
        vm.index = vm.raceImages.length - 1;
      } else {
        vm.index--;
      }
    };

    vm.next = function() {
      if (vm.index >= vm.raceImages.length - 1) {
        vm.index = 0;
      } else {
        vm.index++;
      }
    };
  }
]);