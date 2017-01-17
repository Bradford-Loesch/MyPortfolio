var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"partials/main.html"
        })
        .when('/bio',{
            templateUrl:"partials/bio.html"
        })
        .when('/projects',{
            templateUrl:"partials/projects.html"
        })
        .when('/resume',{
            templateUrl:"partials/resume.html"
        })
        .otherwise({
            redirect_to: "/"
        });
});
