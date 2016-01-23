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
           $scope.message = 'Astronomers are on the verge of making an important step towards identifying another Earth. The discovery of an exoplanet the same size as the Earth and orbiting the same distance from its host star as Earth does the Sun is imminent. Extrapolating from existing data suggests that such narrowly defined Earth analogs will be found to be quite common. But the question of how Earth-like these planets really are will still be unanswered. This is because the nature of these planets\’ atmospheres will be unknown, and planetary atmospheres are a key factor in the question of habitability. <p>My group at the University of Chicago is leading the way in the study of the atmospheres of small exoplanets using ground- and space-based telescopes like the Magellan telescopes in Chile and the Hubble Space Telescope. Our ultimate goal is to look for the smoking gun evidence for life in the atmosphere of an exoplanet, so-called biomarkers.</p>To find biomarkers in the atmosphere of an exoplanet, we have to first find Earth-size planets the right distance from their host star that are suitable for atmospheric studies. Unfortunately, the planets being ideate ed by the ongoing Kepler mission are too distant for this work. So new planet-finding experiments are needed to fill this gap.';
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
