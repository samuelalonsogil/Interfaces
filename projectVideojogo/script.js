//script del videojuego

let jugador;
let fondo;
let mueble;

let x, y, w, h;
let totalShapeCount = 1;

function setup(){
    createCanvas(1425 , 413);
    jugador = new Jugador(width - 1100);
    fondo = loadImage('');
    mueble = new Muebles();

}

function draw() {
    background( 220 );
    image(fondo, 0, 0);


    jugador.dibujar();
    jugador.actualizarPosicion();
    jugador.checkColisionParedes();

    /*controles*/
    if (keyIsDown(LEFT_ARROW)) jugador.moverIzquierda();


    if (keyIsDown(RIGHT_ARROW)) jugador.moverDerecha();




}

function keyReleased() {
    jugador.parar()
}

