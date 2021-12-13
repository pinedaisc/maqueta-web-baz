const log = require('./logService');
const constantes = require('../../constantes/constantes');
const axios = require('axios');
const util = require('util');
const https = require('https');

async function getToken(folio) {

  let basicAuth = '';

  let servicio;

  if (constantes.production) {
    servicio = constantes.urlToken;
    basicAuth = 'Basic ' + Buffer.from(constantes.userKey + ':' + constantes.passwordKey).toString('base64');
  } else {
    servicio = constantes.urlTokenDev;
    basicAuth = 'Basic ' + Buffer.from(constantes.userKeyDev + ':' + constantes.passwordKeyDev).toString('base64');
  }

  var qs = require('qs');
  var data = qs.stringify({
    'grant_type': 'client_credentials'
  });

  const headerSettings = {};
  headerSettings['Authorization'] = basicAuth;

  headerSettings['Content-Type'] = "application/x-www-form-urlencoded";

  let servicios = [];
  let response = await ejecutaAxios(servicio, servicios, 'post', headerSettings, data, null, folio);

  return response;
}

async function execServicePostToken(service, body, folio, headerExtra) {
  return getToken(folio).then(
    async function (tokenResponse) {
      if (tokenResponse.estatus == 'error') {
        return tokenResponse;
      }
      let servicios = tokenResponse.servicios;
      const headerSettings = {};
      headerSettings['Authorization'] = 'Bearer ' + tokenResponse.data.access_token;

      let axiosResponse = ejecutaAxios(service, servicios, 'post', headerSettings, body, headerExtra, folio);

      return axiosResponse;
    }
  );
}

async function execServiceGet(servicio, folio, headerExtra) {
  return getToken(folio).then(
    async tokenResponse => {
      if (tokenResponse.estatus == 'error') {
        return tokenResponse;
      }
      let servicios = tokenResponse.servicios;
      const headerSettings = {};
      headerSettings['Authorization'] = 'Bearer ' + tokenResponse.data.access_token;
      log.info("Ejecutando " + servicio.url, folio);
      return await ejecutaAxios(servicio, servicios, 'get', headerSettings, null, headerExtra, folio);
    }
  );

}

async function ejecutaAxios(service, servicios, metodo, headerSettings, data, headerExtra, folio) {
  let startService = new Date().getTime();
  let response;
  let estatus;
  let servicio;

  if (headerExtra != undefined && headerExtra != null) {
    Object.getOwnPropertyNames(headerExtra).forEach(function (val) {
      headerSettings[val] = headerExtra[val];
    });
  }

  var config = {
    method: metodo,
    url: service.url,
    headers: headerSettings,
    data: data
  };

  log.logger("info", "Ejecutando " + service.servicio + " " + JSON.stringify(config), [], 0, folio);
  
  let execAxios = axios.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });

  try {
    response = await execAxios(config);
    estatus = "info";
    servicio = service.servicio + " Correcto";
  } catch (e) {
    if (e.response == undefined) {
      response = e;
    } else {
      response = e.response;
    }
    estatus = "error";
    servicio = service.servicio + " Fallo";
  }

  let tiempoService = new Date().getTime() - startService;
  response.estatus = estatus;
  response.servicio = servicio;
  response.respuesta = response;
  response.config = config;

  let servicioArray = {
    Servicio: service.servicio,
    Sistema: service.sistema,
    Tiempo: tiempoService
  }

  try {
    if (response.status == 200 || response.status == 201) {
      log.logger("info", util.inspect(response.data), [servicioArray], tiempoService, folio);
    } else {
      log.logger("error", util.inspect(response), [servicioArray], tiempoService, folio);
    }
  } catch (e) {
    log.info("No se pudo obtener response", folio);
  }

  servicios.push(servicioArray);

  response.servicios = servicios;

  return response;
}

function trataThenSimple(response, time, folio) {
  let responseServicio = response.response;
  let tiempoTotal = 0;
  let estatus = "";
  let currentTime = new Date().getTime();
  try {
    log.info(util.inspect(response), folio);
    if (response.servicios != undefined) {
      response.servicios.forEach(function (element) {
        tiempoTotal = tiempoTotal + element.Tiempo;
      });
      estatus = response.estatus;
      if (estatus == undefined) {
        estatus = "info";
      }
      log.logger(estatus, response, response.servicios, currentTime - time, folio);
    } else {
      responseServicio.servicios.forEach(function (element) {
        tiempoTotal = tiempoTotal + element.Tiempo;
      });
      estatus = responseServicio.estatus;
      log.logger(responseServicio.estatus, responseServicio, responseServicio.servicios, currentTime - time, folio);
    }

    if (estatus == 'error') {
      if (response.status != undefined) {
        let data = response.data;
        let status = response.status;
        return { status, data, folio }
      } else {
        log.logger("info", "Response.status undefined", [], 0, folio);
        return { status: 500, data: "Error al procesar tu solicitud", folio: folio }
      }
    } else {
      let respuesta = response.response.data;
      let status = responseServicio.status;
      log.logger(estatus, JSON.stringify(respuesta), [], 0, folio);
      return { status: status, data: respuesta, folio }
    }
  } catch (e) {
    log.logger("error", util.inspect(e), [], 0, folio);
    log.logger("error", "Ocurrio un error procesando la respuesta", [], 0, folio);
    return { status: 500, data: "Error al procesar tu solicitud", folio }
  }

}

function trataThenStatus(response, time, folio) {
  let tiempoTotal = 0;
  let estatus = "";
  let currentTime = new Date().getTime();
  let responseServicio = response.response;
  try {
    if (response.servicios != undefined) {
      response.servicios.forEach(function (element) {
        tiempoTotal = tiempoTotal + element.Tiempo;
      });
      estatus = response.estatus != undefined ? response.estatus : response.response.estatus;
      log.logger(estatus, response, response.servicios, currentTime - time, folio);
    } else {
      responseServicio.servicios.forEach(function (element) {
        tiempoTotal = tiempoTotal + element.Tiempo;
      });
      estatus = responseServicio.estatus;
      log.logger(responseServicio.estatus, responseServicio, responseServicio.servicios, currentTime - time, folio);
    }
    return estatus;
  } catch (e) {
    log.logger("error", util.inspect(e), [], 0, folio);
    log.logger("error", "Ocurrio un error procesando la respuesta", [], 0, folio);
    return "error";
  }
}

module.exports = { trataThenSimple, trataThenStatus, execServiceGet, execServicePostToken }