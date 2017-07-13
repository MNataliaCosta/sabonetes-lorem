angular.module('starter.controllers', ['starter.services'])

.controller('InicioCtrl', function($scope, $state) {
  $scope.iniciar = function(){
    $state.go('app.faca-o-seu')
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FacaOSeuCtrl', function($rootScope, $scope, $state, FacaOSeuService, $http) {

  $scope.peles = ['normal', 'sensível', 'mista', 'oleosa', 'seca'];

  $scope.beneficios = ['hidratação', 'anti-acne', 'rejuvenescimento', 'redução de pelos', 'esfoliação', 'clarear manchas'];

  $scope.resultado = {
    peles : null,
    beneficios : null
      };

  $scope.enviar = function(){
    $http.post('http://localhost:3000/resultados', $scope.resultado).then(function(ingrediente){
      FacaOSeuService.set(ingrediente.data.texto);
        $state.go('app.detalheReceita');
    });

  }
})

.controller('DetalheReceitaCtrl', function($scope, $state, $stateParams, FacaOSeuService) {
  // ele deve receber o objeto das receitas
  $scope.resultados = FacaOSeuService.get();

  $scope.irMapa = function(){
    $state.go('app.ondeComprar')
  }
})

.controller('OndeComprarCtrl', function($scope) {
})

.controller('DuvidasCtrl', function($scope) {
})

.controller('SobreCtrl', function($scope) {
})

;
