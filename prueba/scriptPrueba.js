
                                                            /*tipo de evento*/
document.getElementById('boton1').addEventListener('dblclick' ,showHelloWorld); /*lo que va a pasar cuando se active
                                                                                (se le pasa un puntero de la función sin el paréntesis)*/
function showHelloWorld(){
    /*access element*/          /*access html*/
    document.getElementById('div1').innerHTML = 'Hello World';
    console.log('Esto es un mensaje de consola');
}