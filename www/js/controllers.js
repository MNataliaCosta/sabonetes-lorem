angular.module('starter.controllers', [])

.controller('InicioCtrl', function($scope, $state) {
  $scope.iniciar = function(){
    $state.go('app.faca-o-seu')
  }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('FacaOSeuCtrl', function($scope, $state) {
  $scope.peles = ['normal', 'mista', 'oleosa'];

  $scope.beneficios = ['hidratação', 'esfoliação', 'rejuvenescimento'];

  $scope.enviar = function(){
    $state.go('app.detalheReceita')
  }


})

.controller('DetalheReceitaCtrl', function($scope, $state) {
  // ele deve receber o objeto das receitas
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
