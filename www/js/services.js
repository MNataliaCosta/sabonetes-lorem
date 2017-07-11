angular.module('starter.services', [])

.factory('FacaOSeuService', function() {
  var resultado =
    {
    peles : null,
    beneficios : null
  };


  var receitas = [
{condicao:{peles: 'normal',	 beneficios: 'hidratação'},	texto:'100 gr de aveia em flocos.'},
{condicao:{peles: 'normal',	 beneficios: 'clarear manchas'}, 	texto:'100 gr de camomila.'},
{condicao:{peles: 'normal',	 beneficios: 'anti-acne'}, 		texto:'100 gr de alecrim'},
{condicao:{peles: 'normal',	 beneficios: 'rejuvenescimento'}, 	texto:'150 gr de argila vermelha.'},
{condicao:{peles: 'normal',	 beneficios: 'redução de pelos'}, 	texto:'150 gr cúrcuma em pó.'},
{condicao:{peles: 'normal',	 beneficios: 'esfoliação'}, 		texto:'300 gr de café moído.'},

{condicao:{peles: 'sensível',	 beneficios: 'hidratação'}, 		texto:'100 gr de aveia em flocos'},
{condicao:{peles: 'sensível',	 beneficios: 'clarear manchas'}, 	texto:'100 gr de camomila'},
{condicao:{peles: 'sensível',	 beneficios: 'anti-acne'}, 		texto:'150 gr de argila branca.'},
{condicao:{peles: 'sensível',	 beneficios: 'rejuvenescimento'}, 	texto:'150 gr de argila vermelha.'},
{condicao:{peles: 'sensível',	 beneficios: 'redução de pelos'}, 	texto:'150 gr cúrcuma em pó'},
{condicao:{peles: 'sensível',	 beneficios: 'esfoliação'}, 		texto:'300 gr de farinha de linhaça'},

{condicao:{peles: 'mista',	 beneficios: 'hidratação'}, 		texto:'110 gr de extrato de aloe vera'},
{condicao:{peles: 'mista',	 beneficios: 'clarear manchas'}, 	texto:'100 gr de camomila'},
{condicao:{peles: 'mista',	 beneficios: 'anti-acne'}, 		texto:'150 gr de argila verde'},
{condicao:{peles: 'mista',	 beneficios: 'rejuvenescimento'}, 	texto:'150 gr de argila vermelha.'},
{condicao:{peles: 'mista',	 beneficios: 'redução de pelos'}, 	texto:'150 gr cúrcuma em pó'},
{condicao:{peles: 'mista',	 beneficios: 'esfoliação'}, 		texto:'400 gr de farinha de milho'},

{condicao:{peles: 'oleosa',	 beneficios: 'hidratação'}, 		texto:'30 ml de estrato de própolis'},
{condicao:{peles: 'oleosa',	 beneficios: 'clarear manchas'}, 	texto:'100 gr de camomila'},
{condicao:{peles: 'oleosa',	 beneficios: 'anti-acne'}, 		texto:'150 gr de argila verde'},
{condicao:{peles: 'oleosa',	 beneficios: 'rejuvenescimento'}, 	texto:'150 gr de argila vermelha.'},
{condicao:{peles: 'oleosa',	 beneficios: 'redução de pelos'}, 	texto:'150 gr cúrcuma em pó'},
{condicao:{peles: 'oleosa',	 beneficios: 'esfoliação'}, 		texto:'100 gr de sementes de maracujá trituradas'},

{condicao:{peles: 'seca',	 beneficios: 'hidratação'}, 		texto:'100 gr de aveia em flocos finos'},
{condicao:{peles: 'seca',	 beneficios: 'clarear manchas'}, 	texto:'100 gr de camomila'},
{condicao:{peles: 'seca',	 beneficios: 'anti-acne'}, 		texto:'150 gr de argila branca'},
{condicao:{peles: 'seca',	 beneficios: 'rejuvenescimento'}, 	texto:'150 gr de argila vermelha.'},
{condicao:{peles: 'seca',	 beneficios: 'redução de pelos'}, 	texto:'150 gr cúrcuma em pó'},
{condicao:{peles: 'seca',	 beneficios: 'esfoliação'}, 		texto:'250 gr coco ralado'}
   ];

  return {
    set: function(r) {
    //  console.log(r);
      resultado = r;
    },
    compare: function() {
    return receitas.texto;
  },
    get: function() {
    //  console.log('get chamado');
    //  console.log(resultado);

      for (var i = 0; i < receitas.length; i++) {
      //  console.log(i);
      //  console.log(receitas[i].condicao);
        if (angular.equals(resultado, receitas[i].condicao)) {
        //  console.log('entrou');
        //  console.log(i);
        //  console.log(receitas[i].texto);
          return receitas[i].texto;
        }
      }
      return null;
    }
  }
});
