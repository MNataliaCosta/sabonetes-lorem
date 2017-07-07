angular.module('starter.services', [])

.factory('FacaOSeuService', function() {
  var resultado =
    {
    peles : null,
    beneficios : null
  };


  var receitas = [
    {
      condicao:{
        peles: 'normal',
        beneficios: 'hidratação'
      },
      texto:' normal e hidratar'
    },
    {
      condicao:{
         peles: 'oleosa',
         beneficios: 'esfoliação'
       },
       texto: 'oleosa e esfoliar'
     }
   ];

  return {
    set: function(r) {
      console.log(r);
      resultado = r;
    },
    compare: function() {
    return receitas.texto;
  },
    get: function() {
      console.log('get chamado');
      console.log(resultado);

      for (var i = 0; i < receitas.length; i++) {
        console.log(i);
        console.log(receitas[i].condicao);
        if (angular.equals(resultado, receitas[i].condicao)) {
          console.log('entrou');
          console.log(i);
          console.log(receitas[i].texto);
          return receitas[i].texto;
        }
      }
      return null;
    }
  }
});
