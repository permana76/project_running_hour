app.factory('GalleryService', ['$http', '$filter',
  function($http, $filter) {
    var TOTAL_IMAGES_2015 = 33;
    var TOTAL_IMAGES_2016 = 146;
    var TOTAL_IMAGES_2017 = 16;
    var TOTAL_IMAGES_2018 = 19;
    var gallery = [];

    for (var i = 1; i <= TOTAL_IMAGES_2015; i++) {
      gallery.push({
        year: '2015',
        label: 'Gallery Image',
        image: 'resources/img/gallery/2015/img' + i + '.jpg'
      });
    }

    for (var i = 1; i <= TOTAL_IMAGES_2016; i++) {
      gallery.push({
        year: '2016',
        label: 'Gallery Image',
        image: 'resources/img/gallery/2016/img' + i + '.jpg'
      });
    }

    for (var i = 1; i <= TOTAL_IMAGES_2017; i++) {
      gallery.push({
        year: '2017',
        label: 'Gallery Image',
        image: 'resources/img/gallery/2017/img' + i + '.jpg'
      });
    }

    for (var i = 1; i <= TOTAL_IMAGES_2018; i++) {
      gallery.push({
        year: '2018',
        label: 'Gallery Image',
        image: 'resources/img/gallery/2018/img' + i + '.jpg'
      });
    }

    return {
      getGallery : function(year) {
        return $filter('filter')(gallery, { year: year });
      }
    };
  }
]);