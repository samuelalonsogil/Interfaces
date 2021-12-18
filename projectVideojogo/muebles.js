
class Muebles{

    constructor(x) {
        this.x = 0;
        this.y = height - 32;

        this.velocidadX = 5;
    }

    dibujar(){
        square( Math.floor(Math.random() * 60) , Math.floor(Math.random() * 60) , Math.floor(Math.random() * 60));
    }

}