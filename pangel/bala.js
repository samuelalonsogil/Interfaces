class Bala{
    constructor(x){
        this.x = x
        this.y = height
        this.velY = 4
    }

    dibujar(){
        rect(this.x, this.y, 4, height)
    }

    actualizarPosicion(){
        this.y -=this.velY
    }
}