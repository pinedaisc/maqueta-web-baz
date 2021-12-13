const { response } = require("express");
const { validationResult } = require("express-validator");
const { info } = require("../controllers/services/logService");

const validarCampos = (req, res = response, next) => {

    const folio = req.body.folio;
    //manejo de errores
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        info('Peticion invalida: '+JSON.stringify(errors),folio);
        return res.status(400).json({
            ok: false,
            error: errors.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}