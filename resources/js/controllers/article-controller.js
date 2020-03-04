app.controller('ArticleController', ['$scope', 'articleResolve', '$window', '$sce',
  function($scope, articleResolve, $window, $sce) {
    var vm = this;

    vm.article = articleResolve;

    vm.renderHtml = function(html) {
      return $sce.trustAsHtml(html);
    };
  }
]);