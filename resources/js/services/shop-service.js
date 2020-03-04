app.factory('ShopService', ['$http',
  function($http) {

    var getAllProducts = function(limit, skip) {
      return $http({
        method: 'GET',
        url: 'https://project-rh-backend-dev.herokuapp.com/api/public/products?limit='+ limit +'&skip=' + skip
      }).then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {

      });
    };

    var getProduct = function(slug) {
      return $http({
        method: 'GET',
        url: 'https://project-rh-backend-dev.herokuapp.com/api/public/products/' + slug
      }).then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {

      });
    };

    return {
      getProducts : function(limit, skip) {
        return getAllProducts(limit, skip);
      },
      getProductDetail : function(slug) {
        return getProduct(slug);
      }
    };
  }
]);