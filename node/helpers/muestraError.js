const muestraError = (error, res, folio) => {
    info('Ocurrio un error al procesar la respuesta', folio);
    info(error, folio);
    console.log(error);
    return res.status(500).json({
        ok: false,
        msg: 'Contactar con el administrador'
    });
}

module.exports = { muestraError }