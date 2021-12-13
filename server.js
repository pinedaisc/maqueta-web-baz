const expresss = require('express');
const cors = require('cors');
require('dotenv').config();

//Crear servidor de express
const app = expresss();

//CORS
app.use(cors());

//Directorio publico
//Pendiente por si se usa desde aqui
//app.use(expresss.static('public'));

app.use(expresss.json());

//Rutas
app.use('/api/auth',require('./node/routes/auth'));
app.use('/api/test',require('./node/routes/test'));

//TODO: CRUD: eventos
//Escuchar peticiones
const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
});