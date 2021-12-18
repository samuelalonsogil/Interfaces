class Jugador{

    constructor(x){
        this.isAlive = true

        this.v = 4

        this.x=x
        this.y=height-32

        this.velX=0
        this.stop = loadImage('sprites/s.png')
        this.img=[
            loadImage('sprites/r1.png'),
            loadImage('sprites/r2.png'),
            loadImage('sprites/r3.png'),
            loadImage('sprites/r4.png'),
            loadImage('sprites/r5.png'),
        ]
    }

    disparar(){

    }
    moverDerecha(){
        if(!this.isAlive) return
        this.velX = +this.v
    }
    moverIzquierda(){
        if(!this.isAlive) return
        this.velX = -this.v
    }
    parar(){
        this.velX = 0
    }
    dibujar(){
        //fill('red')
        //rect(this.x,this.y, 32,32)
        const index = Math.round(frameCount/10) % this.img.length // 0,1,2,3,4,5,6,7,8,9 ....
        if(this.velX>0){
            image(this.img[index], this.x, this.y);
        }else if(this.velX<0){
            push()
            scale(-1,1)
            image(this.img[index], -this.x-32, this.y);
            pop()
        }else{ // vel = 0
            image(this.stop, this.x, this.y);
        }
    }
    morir(){
        this.isAlive = false
    }
    checkColisionParedes(){
        if(this.x >= width-32) this.x = width-32
        if(this.x <= 0)this.x = 0
    }
    actualizarPosicion(){
        //this.velX += acelera
        this.x += this.velX
    }

}