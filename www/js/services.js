angular.module('starter.services', [])

.factory('FacaOSeuService', function() {
  var resultado =
    {
    pele : null,
    beneficios : null
  };


  var receitas = [
    {
      condicao:{
      pele: 'normal',
      beneficios: 'hidratação'
    },
    texto:' seca e hidratar'
  },
  {
    condicao:{
     pele: 'oleosa',
     beneficios: 'esfoliação'
   },
   texto: 'oleosa e esfoliar'
   }

 ];

  return {
    compare: function() {
    return receitas.texto;
  },
    get: function() {
      for (var i = 0; i < receitas.length; i++) {
        if (angular.equals(resultado, receitas[i].condicao)) {
          return receitas[i].texto;
        }
      }
      return null;
    }
  }
});
