/*
    Rutas Test
    host+ /api/test
*/
const { Router } = require('express');
const { testGet, testPost, test } = require('../controllers/test');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.use(
    [
        check('folio', 'El folio es requerido').not().isEmpty(),
        validarJWT,
        validarCampos
    ]
);

router.get('/testGet', testGet);

router.post(
    '/testPost',
    check('data', 'El campo data es requerido').not().isEmpty(),
    testPost
);

router.post('/', test);

module.exports = router;