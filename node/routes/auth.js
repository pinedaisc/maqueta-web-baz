/*
    Rutas Auth
    host+ /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const { loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/login',
    [
        check('user', 'El usuario es requerido').not().isEmpty(),
        check('password', 'El password debe de ser de al menos 6 caracteres').isLength({ min: 6 }),
        check('folio', 'El folio es requerido').not().isEmpty(),
        validarCampos
    ],
    loginUsuario
);

router.get('/sessionVerify', validarJWT, revalidarToken);

module.exports = router;