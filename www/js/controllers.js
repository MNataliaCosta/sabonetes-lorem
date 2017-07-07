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

  $scope.beneficios = ['hidratação', 'esfoliação', 'anti-acne', 'clareamento', 'redução de pelos'];

  $scope.enviar = function(){
    $state.go('app.detalheReceita')
  }

})

.controller('DetalheReceitaCtrl', function($scope, $state, $stateParams, FacaOSeuService) {
  // ele deve receber o objeto das receitas
  $scope.resultado = FacaOSeuService.get($stateParams.texto);

  $scope.irMapa = function(){
    $state.go('app.ondeComprar');
  }
})

.controller('OndeComprarCtrl', function($scope) {
})

.controller('DuvidasCtrl', function($scope) {
})

.controller('SobreCtrl', function($scope) {
})

;
