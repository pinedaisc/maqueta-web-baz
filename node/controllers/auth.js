const { response } = require('express');
const { generarJWT } = require('../helpers/jwt');
const constantes = require('../constantes/constantes');
const responses = require('../constantes/responses');
const { complementoFolio, info, logger } = require('./services/logService');
const { muestraError } = require('../helpers/muestraError');
const loginService = require('./services/loginService');

const loginUsuario = async (req, res = response) => {

    const { user, password, folio } = req.body;
    const folioOperacion = folio + "-" + complementoFolio();

        try {

            info('Entrando a login', folioOperacion);
            info(req.body, folioOperacion);
    

            //True para simular login en la aplicacion, false para testear el consumo de apis
            if(true){
                let body = {};
    
                if (user === 'user' && password === 'password') {
                    const uid = 'uid_1234567890';
                    const name = 'Job Alberto';
                    const token = await generarJWT(uid,name,folio);
                    body = {
                        "ok": true,
                        "msg": constantes.successMsg,
                        folioOperacion,
                        token,
                        uid,
                        name
                    }
                }else{
                    body = {
                        "ok": false,
                        "msg": constantes.failedMsg,
                        folioOperacion
                    }
                }
                res.json(body);
            }else{
                if (responses.consultaCu.activated && !constantes.production) {
                    res.status(200).json(responses.consultaCu.value); console.log("MOCKS ON");
                } else {
    
                    info("Entrando a api/login", folio);
                    info(req.body, folio);
                    let date = new Date();
                    let time = date.getTime();
    
                    try {
                        let busquedaCuRequest = {
                            "idTipoBusqueda": 2,
                            "clienteUnico": {
                                "idPais": "1",
                                "idCanal": "1",
                                "idSucursal": "100",
                                "idFolio": "141004"
                            }
                        };
                        
                        info(busquedaCuRequest, folio);
                        loginService.consultaDatosCU(busquedaCuRequest, folio)
                            .then(response => {
                                let tiempoTotal = 0;
                                response.servicios.forEach(function (element) {
                                    tiempoTotal = tiempoTotal + element.Tiempo;
                                });
                                let currentTime = new Date().getTime();
                                logger(response.estatus, response, response.servicios, currentTime - time, folio);
                                if (response.status != undefined) {
                                    let data = response.data;
                                    res.status(response.status).json({ data, folio });
                                } else {
                                    res.status(500).json({ message: "Error al procesar tu solicitud", folio: folio });
                                }
    
                            });
                    } catch (e) {
                        let currentTime = new Date().getTime();
                        logger("error", "Error al consumir /api/login: " + JSON.stringify(e.originalStack), [], currentTime - time, folio);
                        res.status(500).json({ message: "Error al procesar tu solicitud", folio: folio });
                    }
                }
            }
           
        
        } catch (error) {
            muestraError(error,res,folioOperacion);
        }           
}


const revalidarToken = async (req, res = response) => {

    const { uid, name, folio } = req;

    //generar un nuevo JWT 
    const token = await generarJWT(uid, name, folio);

    res.json({
        ok: true,
        token,
        uid,
        name
    });
}


module.exports = {
    loginUsuario,
    revalidarToken
}