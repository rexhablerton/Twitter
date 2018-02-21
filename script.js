
var app = angular.module('app', ['ui.router'])

app.controller('mainController',function () {
	var vm= this;

	vm.Woym=[];
	

	vm.wm="";

	vm.addC = function(comment){

		vm.Woym.push(comment);
		vm.wm="";
	}
	vm.remove = function(remove){
		vm.Woym.splice(vm.Woym.indexOf(remove),1);

	}





});

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
            
        })

         .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html'
        })

        .state('Messages', {
        	url: '/Messages',
        	templateUrl: 'templates/messages.html'
        });

});
