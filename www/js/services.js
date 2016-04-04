angular.module('starter.services', [])

.factory('Movies', function($http) {
  	var baseUrl = "http://www.omdbapi.com/?";
      var returnType = 'json';
    var movieFactory = {};

      var timeoutValue = 15 * 1000;

    movieFactory.getAll = function(searchTerm) {
    	console.log(searchTerm);
        return $http.get(baseUrl + 's=' + searchTerm + '&tomatoes=true&r=' + returnType, {timeout: timeoutValue});
	};

	movieFactory.getDetail = function(movieID) {
    	console.log(movieID);
        return $http.get(baseUrl + 'i=' + movieID + '&tomatoes=true&plot=short&r=' + returnType, {timeout: timeoutValue});
	};
	return movieFactory;
})

.factory('doubanMovies', function($http) {
    var baseUrl = "http://api.douban.com/v2/movie/";
    var doubanFactory = {};

      var timeoutValue = 15 * 1000;

  doubanFactory.getAll = function(searchTerm) {
      console.log(searchTerm);
        return $http.get(baseUrl+'search?q=' + searchTerm, {timeout: timeoutValue});
  };

  doubanFactory.getDetail = function(doubanMovieID) {
      console.log("doubanMovies: "+doubanMovieID);
      var wholeUrl = baseUrl +'subject/'+ doubanMovieID;
      console.log(wholeUrl);
      return $http.get(wholeUrl, {timeout: timeoutValue});
  };
  return doubanFactory;
})

.factory('Books', function($http) {
    var baseUrl = "http://api.douban.com/v2/book/";
    var doubanFactory = {};

      var timeoutValue = 15 * 1000;

    doubanFactory.getAll = function(searchTerm) {
      console.log(searchTerm);
        return $http.get(baseUrl+'search?q=' + searchTerm, {timeout: timeoutValue});
  };

    doubanFactory.getDetail = function(bookID) {
      console.log("Books: "+bookID);
      var wholeUrl = baseUrl + bookID;
        return $http.get(wholeUrl, {timeout: timeoutValue});
  };
  return doubanFactory;
});
