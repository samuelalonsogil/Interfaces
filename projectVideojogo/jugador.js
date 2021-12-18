class Jugador{

    constructor(x) {
        this.isAlive = true;

        this.velocidadX = 10;
        this.velocidadY = 10;

        this.x = x;
        this.y = height - 32;

        this.aceleracionX = 0
        this.aceleracionY = 0

        this.gravedad = 0.1;

        this.img = loadImage('sprites/angelProta.png');
    }

    moverDerecha() {
        this.isAlive ? this.aceleracionX = this.velocidadX : 0;
    }

    moverIzquierda() {
        this.isAlive ? this.aceleracionX = -this.velocidadX : 0;
    }


    parar() {
        this.aceleracionX = 0;
        this.aceleracionY = 0;
    }

    dibujar() {
        image(this.img , this.x - 250 , this.y - 75);

    }

    morir(){
        this.isAlive = false
    }

    checkColisionParedes(){

    }

    actualizarPosicion(){
        this.x += this.aceleracionX;
        this.y-=this.aceleracionY;
    }


}