const { response, request } = require("express");
const jwt = require('jsonwebtoken');
const constantes = require('../constantes/constantes');
const { info } = require("../controllers/services/logService");
const validarJWT = (req= request,res = response,next)=>{
    
    const token = req.header('x-token');
    const folio = req.body.folio;

    if(!token){
        info("Peticion con token vacio",folio);
        return res.status(400).json({
            ok:false
        })
    }
   
    try{
        const {uid,name,folio} = jwt.verify(token, constantes.SECRET_JWT_SEED);
        
        req.uid = uid;
        req.name = name;
        req.folio = folio;
        
    }catch(error){
        info('Token invalido/ Sesion expirada',folio);
        return res.status(401).json({
            ok:false,
            msg: 'Sesión expirada TNV'
        })
    }

    next();
}

module.exports={
    validarJWT
}