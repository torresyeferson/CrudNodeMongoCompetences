  (function() {
    'use strict';

    angular
        .module('app')
        .controller('simuladorController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'userService', '$state', '$stateParams', '$localStorage'];

    function Controller($scope, $rootScope, userService, $state, $stateParams, $localStorage) {
		         function mostrar() {
		  $('container').css({display: "block"})
		   };

			$scope. ocultar=function() {
	  		console.log('dd')
	  		var x = document.getElementById("parte1");
			  if (x.style.display === "none") {
			    x.style.display = "block";
			  } else {
			    x.style.display = "none";
			  }
              var y = document.getElementById("parte2");
                y.style.display = "block";
              
			};
            $scope. ocultar1=function() {
            var x = document.getElementById("parte2");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
              var y = document.getElementById("parte1");
                y.style.display = "block";
              
            };
              $scope. ocultar2=function() {
            var x = document.getElementById("parte3");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
              var y = document.getElementById("parte1");
                y.style.display = "block";
              
            };
            $scope. contacto=function() {
            console.log('dd')
            var x = document.getElementById("parte2");
              if (x.style.display === "none") {
                x.style.display = "block";
              } else {
                x.style.display = "none";
              }
              var y = document.getElementById("parte3");
                y.style.display = "block";
              
            };
	        $scope.escogerContacto = function() {
            console.log($scope.contactos)
            if($scope.contactos==="1"){
                console.log("hola")
                $state.go("contactos")
            }
        };

        function successMessage(message) {
            $(".success").removeClass("in").show();
            $(".success").delay(200).addClass("in").fadeOut(3000);
            $rootScope.message = message;
        }
        function errorMessage(message){
            $(".error").removeClass("in").show();
            $(".error").delay(200).addClass("in").fadeOut(3000);
            $rootScope.message = message;
        }
    }
})();
 