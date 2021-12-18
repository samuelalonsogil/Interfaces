const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
mensajes = []

const io = require('socket.io')(server,{
    cors: {
        methods: ["GET", "POST"]
    }
})

app.get('/', (req, res) => res.send('<h1>Hello world</h1>'));

server.listen(3000, () => console.log('listening on *:3000'));

io.on('connection' , socket => {
    console.log("un cliente se ha conectado", socket.id)

    socket.on('disconect', socket => console.log('el cliente se fue'))

    socket.on('mensaje', datos=>{
        console.log(datos);
        mensajes.push(msg +'<br/>');

        socket.emit('') //envia msj a un cliente en particular

        //msg tipo broadcast
        io.emit('todos los mensajes', mensajes)
    });
})

