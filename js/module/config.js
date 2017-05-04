var app= angular.module('madMod');

app.config(function($routeProvider){
  $routeProvider.when('/form',{
    templateUrl: "views/form.html",
    controller: "formController"
  });

  $routeProvider.when('/output', {
    templateUrl: "views/output.html",
    controller: "outputController"

  });
});
