angular.module('mp2App', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        "using strict";
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/breakfast', {
                templateUrl: 'views/breakfast.html',
                controller: 'MainCtrl'
            })
            .when('/lunch', {
                templateUrl: 'views/lunch.html',
                controller: 'MainCtrl'
            })
            .when('/dinner', {
                templateUrl: 'views/dinner.html',
                controller: 'MainCtrl'
            })
            .when('/dessert', {
                templateUrl: 'views/dessert.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
