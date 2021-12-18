import express from "express"
import nodeFetch from 'node-fetch'
//el import es si usamos modulos
import path from 'path'
const __dirname = path.resolve();

const app = express()
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    //res.send('Hola desde el servidor!!')
    const url = 'https://datahub.io/core/co2-ppm/r/co2-annmean-mlo.json';
    const respuesta = await nodeFetch(url);
    const datosJson = await respuesta.json();
    console.log(datosJson);
                                                            //pasar los datos al html
    res.render(__dirname + '/views/index', {datos:datosJson});


} )

try{
    await app.listen(4000)
    console.log('Servidor arrancado en el puerto 4000');
}catch(err){
    console.error('Fallo al arrancar el server');
}