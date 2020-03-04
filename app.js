// Load angular apps
var app = angular.module('runningHourApp', ['ngMaterial', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'ui-notification', 'slickCarousel']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  //Test Key : pk_test_KEDGuMtwTwZr3BaQtySpjo01
  //Test Key : pk_live_87hsUccNnfSlg8w2drH8OrYb
  Stripe.setPublishableKey('pk_test_KEDGuMtwTwZr3BaQtySpjo01');

  $stateProvider
    .state('layout', {
      abstract: true,
      views: {
        'header': {
          templateUrl: 'resources/views/header.html',
          controller: 'HeaderController',
          controllerAs: 'vm'
        },
        'content': {
          template: '<ui-view/>'
        },
        'footer': {
          templateUrl: 'resources/views/footer.html'
        }
      }
    })
    .state('layout.home', {
      url: '/',
      templateUrl: 'resources/views/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('layout.registration', {
      url: '/registration',
      templateUrl: 'resources/views/registration.html',
      controller: 'RegistrationController',
      controllerAs: 'vm'
    })
    .state('layout.rfiPayment', {
      url: '/rfi-payment?_id',
      templateUrl: 'resources/views/payment.html',
      controller: 'PaymentController',
      controllerAs: 'vm'
    })
    .state('layout.confirmation', {
      url: '/confirmation',
      templateUrl: 'resources/views/confirmation.html',
      controller: 'ConfirmationController',
      controllerAs: 'vm'
    })
    .state('layout.race', {
      url: '/race',
      templateUrl: 'resources/views/race.html',
      controller: 'RaceController',
      controllerAs: 'vm'
    })
    .state('layout.calendar', {
      url: '/calendar',
      templateUrl: 'resources/views/calendar.html'
    })
    .state('layout.about', {
      url: '/about',
      templateUrl: 'resources/views/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    })
    .state('layout.shop', {
      url: '/shop',
      templateUrl: 'resources/views/shop/shop-page.html',
      controller: 'ShopController',
      controllerAs: 'vm'
    })
    .state('layout.product', {
      abstract: true,
      url: '/shop/product',
      template: '<ui-view/>',
      data: {
        proxy: 'layout.product.view'
      }
    })
    .state('layout.product.view', {
      url: '/:slug',
      templateUrl: 'resources/views/shop/shop-detail.html',
      controller: 'ProductController',
      controllerAs: 'vm',
      resolve: {
        productSlug: getProductSlug
      }
    })
    .state('layout.cart', {
      url: '/shop/cart',
      templateUrl: 'resources/views/shop/shop-cart.html',
      controller: 'ShopCartController',
      controllerAs: 'vm'
    })
    .state('layout.payment', {
      url: '/shop/payment',
      templateUrl: 'resources/views/shop/shop-payment.html',
      controller: 'ShopController',
      controllerAs: 'vm'
    })
    .state('layout.articles', {
      abstract: true,
      url: '/articles',
      template: '<ui-view/>',
      data: {
        proxy: 'layout.articles.list'
      }
    })
    .state('layout.articles.list', {
      url: '/:type',
      templateUrl: 'resources/views/articles.html',
      controller: 'ArticlesController',
      controllerAs: 'vm',
      resolve: {
        articlesType: getArticlesType
      }
    })
    .state('layout.articles.view', {
      url: '/:type/:id',
      templateUrl: 'resources/views/article.html',
      controller: 'ArticleController',
      controllerAs: 'vm',
      resolve: {
        articleResolve: getArticleId
      }
    })
    .state('layout.gallery', {
      abstract: true,
      url: '/gallery',
      template: '<ui-view/>',
      data: {
        proxy: 'layout.articles.list'
      }
    })
    .state('layout.gallery.list', {
      url: '/:year',
      templateUrl: 'resources/views/gallery.html',
      controller: 'GalleryController',
      controllerAs: 'vm',
      resolve: {
        galleryYear: getGalleryYear
      }
    })
    .state('layout.faq', {
      url: '/faq',
      templateUrl: 'resources/views/faq.html'
    });

  $locationProvider.html5Mode(true);

  getArticlesType.$inject = ['$stateParams'];

  function getArticlesType($stateParams) {
    return $stateParams.type;
  }

  getArticleId.$inject = ['$stateParams', 'ArticlesService'];

  function getArticleId($stateParams, ArticlesService) {
    return ArticlesService.getArticleDetail($stateParams.id);
  }

  getProductSlug.$inject = ['$stateParams'];

  function getProductSlug($stateParams) {
    return $stateParams.slug;
  }

  getGalleryYear.$inject = ['$stateParams'];

  function getGalleryYear($stateParams) {
    return $stateParams.year;
  }
});

app.run(function($rootScope, $anchorScroll, $window, $state, $sce) {
  $rootScope.isLoading = false;
  $rootScope.isMobile = false;

  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.isLoading = true;
  });

  $rootScope.$on('$stateChangeSuccess', function() {
    $anchorScroll();
    $rootScope.isLoading = false;
    $rootScope.$state = $state;
    switch ($rootScope.$state.current.name) {
      case 'layout.home':
        $rootScope.pageTitle = $sce.trustAsHtml('RUNNING<strong style="color:yellow">HOUR</strong>');
        break;
      case 'layout.race':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">RUN FOR INCLUSION 2020</strong>');
        break;
      case 'layout.registration':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">REGISTRATION</strong>');
        break;
      case 'layout.rfiPayment':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">PAYMENT</strong>');
        break;
      case 'layout.confirmation':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">CONFIRMATION</strong>');
        break;
      case 'layout.calendar':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">CALENDAR</strong>');
        break;
      case 'layout.about':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">ABOUT US</strong>');
        break;
      case 'layout.gallery':
      case 'layout.gallery.list':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">GALLERY</strong>');
        break;
      case 'layout.faq':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">F.A.Q</strong>');
        break;
      case 'layout.shop':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">SHOP</strong>');
        break;
      case 'layout.product.view':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">SHOP</strong>');
        break;
      case 'layout.cart':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">SHOP · CART</strong>');
        break;
      case 'layout.payment':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">SHOP · PAYMENT</strong>');
        break;
      case 'layout.articles.list':
      case 'layout.articles.view':
        $rootScope.pageTitle = $sce.trustAsHtml('<strong style="color: #4D4D4D">ARTICLES</strong>');
        break;
    }
  });

  $rootScope.$watch(function() {
    return $window.innerWidth;
  }, function(value) {
    if (value < 900) {
      $rootScope.isMobile = true;
    } else {
      $rootScope.isMobile = false;
    }
  });
});