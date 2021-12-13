const jwt = require('jsonwebtoken');
const constantes = require('../constantes/constantes');
const { info } = require('../controllers/services/logService');

const generarJWT = (uid, name, folio) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name, folio };
        jwt.sign(
            payload,
            constantes.SECRET_JWT_SEED,
            {
                expiresIn: '2h'
            },
            (err, token) => {
                if (err) {
                    info('Error al generar JWT', folio);
                    info(err, folio);
                    reject('Error al generar token');
                }
                resolve(token);
            }
        );
    })

}

module.exports = {
    generarJWT
}