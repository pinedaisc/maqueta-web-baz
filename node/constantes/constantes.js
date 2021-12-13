const constantes = {
    production: false,
    
    version: '0.0.2',
    //Llaves Dev robadas xd, remplazar por las del producto superApp
    userKeyDev: 'k8pcWOMEFm1uCmfKrUI2piQFwslVQspL',
    passwordKeyDev: 'qVBxKFSGMqGcwkmP',

    userKey: 'UserProd',
    passwordKey: 'PasswordProd',
    
    //Api_key de prueba de Giphy borrar
    api_key: 'er72FIzPh1zx0u5b9bRwoQaDrvYVzC2F',

    SECRET_JWT_SEED: 'v2PVVA4zQXUs4TmMecg8',

    successMsg: 'Operación exitosa',
    failedMsg: 'Operación no exitosa',
    
    urlToken: {url:'https://prod-api.bancoazteca.com:8080/oauth2/v1/token',servicio:"TOKEN",sistema:"BANCADIGICAL"},
    urlTokenQa: {url:'https://qa.apibaz.com/oauth2/v1/token',servicio:"TOKEN",sistema:"BANCADIGICAL"},
    urlTokenDev: {url:'https://dev-api.bancoazteca.com.mx:8080/oauth2/v1/token',servicio:"TOKEN",sistema:"BANCADIGICAL"},

    urlConsultaDatosCU: {url:'https://dev-api.bancoazteca.com.mx:8080/identidad-digital/cliente-unico/clientes/v1/busquedas',servicio:"BUSQUEDACU",sistema:"BANCADIGITAL"},
}

module.exports = constantes;