const log4js = require("log4js");
const util = require('util');
const date = require('date-and-time');
const constantes = require("../../constantes/constantes");

if (constantes.production) {
    log4js.configure({
        appenders: { out: { type: "dateFile", layout: { type: 'messagePassThrough' }, filename: "C:\\SuperApp\\SuperApp.log", pattern: '.yyyy-MM-dd', maxLogSize: 524288000, compress: true } },
        categories: { default: { appenders: ["out"], level: "info" } }
    });
} else {
    log4js.configure({
        appenders: {
            out: { type: "dateFile", layout: { type: 'messagePassThrough' }, filename: "C:\\SuperApp\\SuperApp.log", pattern: '.yyyy-MM-dd', maxLogSize: 524288000, compress: true },
            stdout: { type: 'stdout', layout: { type: 'messagePassThrough' } }
        },
        categories: { default: { appenders: ["out", "stdout"], level: "info" } }
    });
}


function logger(nivel, mensaje, servicios, tiempoTotal, folio) {
    let log;
    const logger = log4js.getLogger("out");
    const now = new Date();
    const logDate = date.format(now, 'YYYY-MM-DD HH:mm:ss:SSS');
    if (nivel == undefined) {
        nivel = "info";
    }
    if (typeof mensaje == 'object') {
        let text;
        try {
            let servicio;
            let request;
            let response;
            if (mensaje.response != undefined) {
                servicio = mensaje.response.servicio;
                request = mensaje.response.config;
                response = mensaje.response.data;
            } else {
                servicio = mensaje.servicio;
                request = mensaje.config;
                response = mensaje.data;
            }

            if (response == undefined) {
                response = mensaje.respuesta.data;
            }
            if (response == undefined) {
                response = mensaje.respuesta;
            }
            text = { servicio, request, response };
            log = { "log_data": { "fecha": logDate, "Level": nivel.toUpperCase(), "Mensaje": "version: " + constantes.version + " :: " + folio + " :: Resumen TX => " + JSON.stringify(text) + " <=", "servicios": servicios, "TiempoTotal": tiempoTotal } };
        } catch (e) {
            text = util.inspect(mensaje);
            log = { "log_data": { "fecha": logDate, "Level": nivel.toUpperCase(), "Mensaje": "version: " + constantes.version + " :: " + folio + " :: Resumen TX => " + text + " <=", "servicios": servicios, "TiempoTotal": tiempoTotal } };
        }
    } else {
        log = { "log_data": { "fecha": logDate, "Level": nivel.toUpperCase(), "Mensaje": "version: " + constantes.version + " :: " + folio + " ::" + util.inspect(mensaje) + "::", "servicios": servicios, "TiempoTotal": tiempoTotal } };
    }
    logger.info(JSON.stringify(log));
}

function info(mensaje, folio) {
    if (typeof mensaje == 'object') {
        try {
            mensaje = JSON.stringify(mensaje);
        } catch (e) {
            mensaje = util.inspect(mensaje);
        }
    }
    logger("info", mensaje, [], 0, folio)
}

function complementoFolio() {
    const now = new Date();
    let folio = now.getFullYear() + "" + now.getMonth() + "" + now.getDay() + "" + now.getHours() + "" + now.getMinutes() + "" + now.getSeconds() + "" + now.getMilliseconds() + "" + Math.floor(Math.random() * 100);
    return folio;
}

module.exports = { complementoFolio, info, logger }