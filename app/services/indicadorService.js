(function () {
    'use strict';
 
    angular
        .module('app')
        .service('indicadorService', indicadorService);
 
    indicadorService.$inject = ['$http', 'globalConfig'];
    function indicadorService($http, globalConfig) {
        
        var service1 = {};
        service1.GetAll = GetAll;
        service1.GetById = GetById;
        service1.Create = Create;
        service1.Update = Update;
        service1.Delete = Delete;
        return service1;
 
        function GetAll() {
            return $http.get(globalConfig.indicadorApi).then(handleSuccess, handleError('Error getting all indicador'));
        }
 
        function GetById(id) {
            return $http.get(globalConfig.indicadorApi + id).then(handleSuccess, handleError('Error getting indicador by id'));
        }
 
        function Create(indicador) {
            console.log(indicador);
            var obj = JSON.parse(indicador);
            return $http.post(globalConfig.indicadorApi, obj).then(handleSuccess, handleError('Error creating indicador'));
        }
 
        function Update(indicador) {
            console.log(indicador)
            return $http.put(globalConfig.indicadorApi + indicador._id, indicador).then(handleSuccess, handleError('Error updating indicador'));
        }
 
        function Delete(id) {
            return $http.delete(globalConfig.indicadorApi + id).then(handleSuccess, handleError('Error deleting indicador'));
        }

        function Login(indicador) {
            return $http.post(globalConfig.indicadorLoginApi, indicador).then(handleSuccess, handleError('Error deleting indicador'));
        }
 
        function handleSuccess(res) {
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }
 
})();