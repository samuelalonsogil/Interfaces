class Pelota{
    constructor(x,y, r){
        this.x=x
        this.y=y
        this.velX = 3
        this.velY = 3*2
        this.masa=0
        this.acelY = 0.15  //.4  .8
        this.r=r

        switch(r){
            case 20: this.acelY=0.15; break;
            case 10: this.acelY=0.2; break;
            case 5: this.acelY=0.3; break;
        }
    }

    checkColisionPared(){
        if(this.x>width-this.r || this.x<0+this.r)
            this.velX = -this.velX
    }

    checkColisionSuelo(){
        if(this.y > height - this.r) this.velY = -3*2
    }


    dibujar(){
        fill('blue')
        circle(this.x, this.y, this.r*2)
        point(this.x,this.y)
    }

    actualizarPosicion(){
        this.velY += this.acelY
        this.x += this.velX
        this.y += this.velY
    }




}