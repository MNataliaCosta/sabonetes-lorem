angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope, $state) {
  $scope.iniciar = function(){
    $state.go('app.faca-o-seu')
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FacaOSeuCtrl', function($scope, $state, FacaOSeuService) {

  $scope.peles = ['normal', 'sensível', 'mista', 'oleosa', 'seca'];

  $scope.beneficios = ['hidratação', 'anti-acne', 'rejuvenescimento', 'redução de pelos', 'esfoliação', 'clareamento de manchas'];

  $scope.resultado = {
    peles : null,
    beneficios : null
  };


  $scope.enviar = function(){
    FacaOSeuService.set($scope.resultado);
    $state.go('app.detalheReceita')
  }

})

.controller('DetalheReceitaCtrl', function($scope, $state, $stateParams, FacaOSeuService) {
  // ele deve receber o objeto das receitas
  $scope.resultado = FacaOSeuService.get($stateParams.texto)

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
