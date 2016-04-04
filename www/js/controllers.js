angular.module('starter.controllers', [])

.controller('DoubanCtrl', function($scope, $http, Books) { 
  $scope.searchmovie = 'no';
  $scope.showloader = "no";
  $scope.getAll = function(searchTerm) {
        $scope.showloader = "yes";
        Books.getAll(searchTerm).then(function(response) {
            var result = response.data;
            $scope.results = result.books;
           // console.log(result.books);
            $scope.searchmovie = 'yes';
            $scope.showloader = "no";
        }, function(error) {
            console.log("error");
        });
    };  
})
.controller('bookDetailCtrl',function($scope,$stateParams, $http, Books){
  console.log("Jinru ID");
  var bookID = $stateParams.bookID;
  console.log("bookID: "+bookID);
  var getDetail = function(bookID){
    Books.getDetail(bookID).then(function(response){
      var details = response.data;
      $scope.details = details;
      console.log(details);
    },function(error){
      console.log("erroe");
    });
  };

  $scope.$on('$ionicView.enter', function() {   
    getDetail(bookID);
  });
})

.controller('IMDBCtrl', function($scope, $http, Movies) {
  $scope.searchmovie = 'no';
  $scope.showloader = "no";
  $scope.getAll = function(searchTerm) {
        console.log("hello");
        $scope.showloader = "yes";
        Movies.getAll(searchTerm).then(function(response) {
            var result = response.data;
            $scope.results = result.Search;
            console.log(result.Search);
            $scope.searchmovie = 'yes';
            $scope.showloader = "no";
        }, function(error) {
            console.log("error");
        });
    };

})

.controller('detailCtrl',function($scope,$stateParams, $http, Movies){
  var imdbID = $stateParams.imdbID;
  var getDetail = function(imdbID){
    Movies.getDetail(imdbID).then(function(response){
      var details = response.data;
      $scope.details = details;
      console.log(details);
    },function(error){
      console.log("erroe");
    });
  };

  $scope.$on('$ionicView.enter', function() {   
    getDetail(imdbID);
  });
})

.controller('doubanMovieCtrl', function($scope, $http, doubanMovies) {
  $scope.searchmovie = 'no';
  $scope.showloader = "no";
  $scope.getAll = function(searchTerm) {
        $scope.showloader = "yes";
        doubanMovies.getAll(searchTerm).then(function(response) {
            var result = response.data;
            $scope.results = result.subjects;
           // console.log(result.books);
            $scope.searchmovie = 'yes';
            $scope.showloader = "no";
        }, function(error) {
            console.log("error");
        });
    };  
})

.controller('doubanMovieDetailCtrl',function($scope,$stateParams, $http, doubanMovies){
 // console.log("Jinru Movie ID");
  var movieID = $stateParams.movieID;
 // console.log("movieID: "+movieID);
  var getDetail = function(movieID){
      //console.log("movieID1: "+movieID);
    doubanMovies.getDetail(movieID).then(function(response){
      var details = response.data;
      $scope.details = details;
      console.log(details);
    },function(error){
      console.log("erroe");
    });
  };

  $scope.$on('$ionicView.enter', function() {   
    getDetail(movieID);
  });
});











