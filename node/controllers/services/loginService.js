const constantes = require('../../constantes/constantes');
const tokenService = require('./tokenService.js');


function consultaDatosCU(busquedaCuRequest, folio) {
  return tokenService.execServicePostToken(constantes.urlConsultaDatosCU, busquedaCuRequest, folio);
}

module.exports = { consultaDatosCU }