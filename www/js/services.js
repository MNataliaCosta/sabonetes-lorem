angular.module('starter.services', [])

.factory('FacaOSeuService', function() {

  var result = {};

  return {
    set: function(ingrediente) {
      result.texto = ingrediente;
    },
    get: function() {
        return result;
    }
  }
})

.factory('coordenadasService', function() {
  var result={}

/*   = [
{"coordenada":"-15.7387287, -47.8894434"},
{"coordenada":"-23.4775452, -46.3182969"},
{"coordenada":"-22.7555205, -47.3525143"},
{"coordenada":"-3.72131350, -38.5279832"},
{"coordenada":"-23.5515390, -46.6313370"},
{"coordenada":"-23.5574734, -46.5967845"},
{"coordenada":"-14.2028880, -41.6733240"},
{"coordenada":"-12.2557996, -38.9613035"},
{"coordenada":"-26.2210320, -52.6742013"},
{"coordenada":"-15.2459548, -40.2473788"},
{"coordenada":"-23.5084390, -46.8612130"},
{"coordenada":"-22.3266630, -49.0677610"},
{"coordenada":"-22.2310376, -54.7777253"},
{"coordenada":"-23.5815488, -46.5857563"},
{"coordenada":"-23.5523032, -46.6306688"},
{"coordenada":"-23.5524563, -46.6324925"},
{"coordenada":"-23.5517100, -46.6304860"},
{"coordenada":"-23.5519349, -46.6308755"},
{"coordenada":"-23.5574734, -46.5967845"},
{"coordenada":"-23.6576600, -46.5265110"},
{"coordenada":"-23.5611360, -46.6293940"},
{"coordenada":"-23.5213941, -46.5463333"},
{"coordenada":"-23.6332142, -46.6904906"},
{"coordenada":"-23.5309123, -46.5500695"}];*/

return {
    listalojas: function() {
        return coordenadas;
    },
    get: function (coordenada) {
        for (var i = 0; i < coordenadas.length; i++) {
              return coordenada[i];
            }
        }
      }
  });
