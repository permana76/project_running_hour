app.controller('ArticlesController', ['$scope', 'ArticlesService', 'articlesType',
  function($scope, ArticlesService, articlesType) {
    var vm = this;

    vm.type = articlesType;
    vm.articles = ArticlesService.getArticles(articlesType);

    switch(vm.type) {
      default:
        vm.pageTitle = 'All';
        break;
      case 'featuredMembers':
        vm.pageTitle = 'Featured Members';
        break;
      case 'newsletter':
        vm.pageTitle = 'Newsletter';
        break;
      case 'media':
        vm.pageTitle = 'Media';
        break;
    }
  }
]);