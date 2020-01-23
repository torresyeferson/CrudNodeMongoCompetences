(function() {
    'use strict';

    angular
        .module('app')
        .controller('instrumentoController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'indicadorService', '$state', '$stateParams', '$localStorage'];

    function Controller($scope, $rootScope, indicadorService, $state, $stateParams, $localStorage) {
        $scope.instrumento = [];
            if ($state.current.name == "instrumentos") {
                $rootScope.Title = "instrumento Listing";
                indicadorService.GetAll().then(function(res) {
                    $scope.instrumento = res.data;
                }).catch(function(err) {
                    console.log(err);
                });
                $scope.deleteinstrumento = function(id) {
                    if (confirm('Are you sure to delete?')) {
                        indicadorService.Delete(id).then(function(res) {
                            if (res.success) {
                                successMessage(res.message);
                                $state.go("instrumentos", {}, { reload: true });
                            }else  errorMessage(res.message)
                        }).catch(function(err) {
                            console.log(err);
                        });
                    }
                };
            } else if ($state.current.name == "editIn") {
                $rootScope.Title = "Edit instrumento";
                var id = $stateParams.id;
                indicadorService.GetById(id).then(function(res) {
                    $scope.instrumento = res.data;
                }).catch(function(err) {
                    console.log(err);
                });
                $scope.saveDataI = function(instrumento) {
                    console.log(instrumento);
                    if ($scope.instrumentoForm.$valid) {
                        indicadorService.Update(instrumento).then(function(res) {
                            if (res.success) {
                               successMessage(res.message);
                                $state.go("instrumentos");
                            }else  errorMessage(res.message)
                        }).catch(function(err) {
                            console.log(err);
                        });
                    }
                };
            } else if ($state.current.name == "createIn") {
                $rootScope.Title = "Create instrumento";
                $scope.saveDataI = function(instrumento) {
                    console.log(instrumento)
                    $scope.IsSubmit = true;
                    console.log("create",$scope.instrumentoForm);
                    if ($scope.instrumentoForm.$valid) {
                        console.log("pasoooo");
                        indicadorService.Create(instrumento).then(function(res) {
                            if (res.success) {
                                successMessage(res.message);
                                $state.go("instrumentos");
                            }else  errorMessage(res.message)
                        }).catch(function(err) {
                            console.log(err);
                            errorMessage(err)
                        });
                    }
                };
            }
        

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