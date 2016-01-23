// create the module
// also include ngRoute for all our routing needs
var maroonApp = angular.module('maroonApp', ['ngRoute']);

// configure our routes
maroonApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/',        {
                templateUrl : 'partials/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/about',   {
                templateUrl : 'partials/about.html',
                controller  : 'aboutController'
            })

            // route for the about page
            .when('/update',  {
                templateUrl : 'partials/update.html',
                controller  : 'updateController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller  : 'contactController'
            })

            // route for the contact page
            .when('/people', {
                templateUrl : 'partials/people.html',
                controller  : 'peopleController'
          });
    });

// create the controller and inject Angular’s $scope
   maroonApp.controller('homeController', function($scope) {
     console.log($scope);
           $scope.message = '';
         });

   maroonApp.controller('aboutController', function($scope) {
     console.log($scope);
           $scope.message = 'Astronomers are on the verge of making an important step towards identifying another Earth. The discovery of an exoplanet the same size as the Earth and orbiting the same distance from its host star as Earth does the Sun is imminent.';
         });

   maroonApp.controller('updateController', function($scope) {
     console.log($scope);
                 $scope.message = 'Look! I am an update page.';
               });

   maroonApp.controller('contactController', function($scope) {
     console.log($scope);
           $scope.message = 'I am a conteact page';
         });

   maroonApp.controller('peopleController', function($scope) {
     console.log($scope);
           $scope.message = 'We work here!';
         });

    // maroonApp.controller('indexController', function($scope) {
    //        console.log($scope);
    //              $scope.fetch = function() {
    //                $http.get
    //              };
    //            });
