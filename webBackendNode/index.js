//import bodyParser from 'body-parser';
import express from 'express';
import mysql from 'mysql';

/*const bodyParser = require('body-parser');
let express = require('express');
let mysql = requir('mysql')*/

let app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/' , (rq, res) => res.send('qué pasa perro') )
app.get('/fecha' , (rq, res) => {
    
    const fechaActual = new Date();
    const fechaFormateada = new Intl.DateTimeFormat('es-ES').format(fechaActual)
    res.send (fechaFormateada);

} )

app.get('/listaAlumnos' , (rq, res) => {
    const datosJsopn = {
        nombre: 'samuel', edad: 22
    }
    res.json(datosJsopn);
} )

app.listen(4000, () => console.log('Servidor encendido')  );

app.get('/formulario' , (rq, res) => res.sendFile(__dirname + '/views/index.html') )

app.get('/:numero/cuadrado' , (rq, res) => {
    const {numero, numero02, numero03, numero04} = rq.params.numero;
    const floatNum = parseFloat(numero);
    res.send( '' + floatNum * floatNum);
} )

app.get('/:nombre/saludarNombre' , (rq, res) => {
    const {name} = rq.params;
    res.send('Hola ' + name.toUpperCase());
} )


app.get('/datosPersonales' , (rq, res) => {
    const {name,apellidos,ciudad,pais} = rq.query;
    
    res.status(200).json({
        nombre:`${nombre} ${apellidos} ${pais} ${ciudad}`,
        lugar:`${pais} ${ciudad}`});
} )

app.post('/login' , (rq, res) => {
    const {user, pswd} = rq.body;
    console.log(user, pswd);
    res.send( `Gracias por enviar los datos ${user}`)
})

app.get('/pagina_ejs', (req , res ) =>{
    res.render('index.ejs', {nombre:'Samuel'})
})

let con = mysql.createConnection({
    host:'127.0.0.1',
    port:'3308',
    user:'root',
    password:'Ad1234',
    password:'cebem'
})

/*//abre conexión con BD
con.connect(error =>{
    if(error) console.error('fallo al conectarse a la base de datos')
    else {
        console.log('Todo OK')

        //TODO async await
        //Abrir el servidor en el puerto 4000
        app.listen(4000, () => {
        console.log('Servidor encendido')
})
    }
})*/

//async box
try{

    await con.connect();
    await app.listen(4000);
    
}catch(err){
    console.error('Fallo: ', err);
}

app.get('/profesores', (req, res) => {
    const query = 'select * from profesor'
    con.query(query, (error, resultado) =>{
        if(error) console.error('fallo al hacer la consulta select', error)
        else res.send(resultado)
    })
})

