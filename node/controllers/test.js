const { response } = require("express");
const { obtenerImagenRandom } = require("./services/gifService");
const { complementoFolio } = require("./services/logService");
const { muestraError } = require("../helpers/muestraError");

const testGet = async (req, res = response) => {

    const folioOperacion = req.body.folio + complementoFolio();
    try {
        res.status(200).json( {respuesta:'Respuesta de peticion get'} );
    } catch (error) {
        return muestraError(error, res, folioOperacion);
    }


}

const testPost = async (req, res = response) => {

    const folioOperacion = req.body.folio + complementoFolio();
    try {
        
        let data = req.body.data;
        
        console.log(data + ' recibido');
        
        let upper = data.toUpperCase();

        res.status(200).json( {respuesta:'Respuesta de peticion post + ' + upper} );

    } catch (error) {
        return muestraError(error, res, folioOperacion);
    }
}

const test = async (req, res = response) => {

    try {
        const folioOperacion = req.body.folio + complementoFolio();
        let response = obtenerImagenRandom();
        response
        .then(
          ({data}) => {
            res.status(200).json( {respuesta:data.images.downsized_large.url} );
          }
        ).catch(
          err=> {
            console.log(err)
            res.status(500).json( {respuesta:"Ocurrio un error al procesar la respuesta"} );
          } 
        );


    } catch (error) {
        return muestraError(error, res, folioOperacion);
    }


}

module.exports = {
    testGet,
    testPost,
    test
}