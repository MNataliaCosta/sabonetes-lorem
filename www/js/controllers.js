angular.module('starter.controllers', ['starter.services'])


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
    $http.post('http://172.16.15.143:3000/resultados', $scope.resultado).then(function(ingrediente){
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

.controller('OndeComprarCtrl', function($scope, $http, coordenadasService ) {
  $http.get('http://localhost:3000/coordenadas').then(function(resposta){
        $scope.lojas = resposta.data;
    });

})

.controller('LoginDuvidasCtrl', function($scope, $state, Facebook) {
  $scope.login = function(){
    Facebook.login(function(response) {
      $state.go('app.duvidas')
      });
  }
})

.controller('DuvidasCtrl', function($scope, $state, Facebook, $http, $interval, $ionicScrollDelegate) {
  $scope.dados = {};
  $scope.mensagens = [];

  var intervalo;

  Facebook.api('/me', function (response){
    $scope.dados.nome = response.name;
  });

  $scope.mandarMensagem = function (){
    //por enquanto está com IP da Natty
    $http.post('http://172.16.15.143:3000/chat', $scope.dados).then(function(){
      $scope.dados.conteudo = '';
    });
    iniciarIntervalo();
    $ionicScrollDelegate.scrollBottom();
  }

  function iniciarIntervalo(){
  //   console.log(intervalo);
  //   if(intervalo && intervalo.$$state.value != 'canceled'){
  //     console.log('intervalo já está ativo');
  //     return;
  //   }
  //
  //   console.log('intervalo inicializado');
  //   intervalo = $interval(function(){
      $http.get('http://172.16.15.143:3000/chat').then(function(response){
        $scope.mensagens = response.data;
      });
    // }, 1000);
  }

  $scope.apagar = function(){
    console.log('intervalo cancelado');
    $scope.mensagens = [];
    $interval.cancel(intervalo);
  }

  iniciarIntervalo();
})

.controller('SobreCtrl', function($scope) {
});
