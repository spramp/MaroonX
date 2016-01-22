// create the module
// also include ngRoute for all our routing needs
var maroonApp = angular.module('maroonApp', ['ngRoute']);

// configure our routes
maroonApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'partials/about.html',
                controller  : 'aboutController'
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
   maroonApp.controller('mainController', function($scope) {
// create a message to display in our view
           $scope.message = 'Modo malorum incident usu ad. Has modo temporizes eu. Ea disputando definitionem eum, vim veritus ponderum euripidis ea. Altera präsent ullamcorper ad per, cu idque expetenda usu.';
         });

   maroonApp.controller('aboutController', function($scope) {
           $scope.message = 'Look! I am an about page.';
         });

   maroonApp.controller('contactController', function($scope) {
           $scope.message = 'Contact us! JK. This is just a demo.';
         });

   maroonApp.controller('peopleController', function($scope) {
           $scope.message = 'We work here!';
         });
