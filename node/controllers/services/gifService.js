const axios = require('axios');
const constantes = require('../../constantes/constantes.js');

async function obtenerImagenRandom (){

	const url = 'https://api.giphy.com/v1/gifs/random?api_key='+ constantes.api_key;
	const options = {
		method: "get",
		url,
	};
	const response = await axios(options);

    return response.data;
}

module.exports =  { obtenerImagenRandom }