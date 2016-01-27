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

            // route for the update page
            .when('/update',  {
                templateUrl : 'partials/update.html',
                controller  : 'updateController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'partials/contact.html',
                controller  : 'contactController'
            })

            // route for the people page
            .when('/people', {
                templateUrl : 'partials/people.html',
                controller  : 'peopleController'
            })

            // route for the calibration page
            .when('/calibration', {
                templateUrl : 'partials/calibration.html',
                controller  : 'calibrationController'
            })

            // route for the iotd page
            .when('/iotd', {
                templateUrl : 'partials/iotd.html',
                controller  : 'iotdController'
          });
    });

// create the controller and inject Angular’s $scope
   maroonApp.controller('homeController', function($scope) {
     console.log($scope);
           $scope.message = '';
         });

   maroonApp.controller('aboutController', function($scope) {
     console.log($scope);
           $scope.message = 'About this webpage';
         });

   maroonApp.controller('updateController', function($scope) {
     console.log($scope);
                 $scope.message = 'Look! I am an update page.';
         });

   maroonApp.controller('contactController', function($scope) {
     console.log($scope);
           $scope.message = 'I am a contact page';
         });

   maroonApp.controller('peopleController', function($scope) {
     console.log($scope);
           $scope.message = 'We work here!';
         });

   maroonApp.controller('calibrationController', function($scope) {
     console.log($scope);
           $scope.message = 'Calibration starts here';
               });

   maroonApp.controller('iotdController', function($scope) {
      console.log($scope);
           $scope.message = 'Image of the Day';
         });

    // maroonApp.controller('indexController', function($scope) {
    //        console.log($scope);
    //              $scope.fetch = function() {
    //                $http.get
    //              };
    //            });
