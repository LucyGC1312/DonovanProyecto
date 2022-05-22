class Mapas {
    constructor(x,y,width,height){
var options = {

    isStatic:true

}

   this.body = Bodies.rectangle(x,y,width,height,options);  
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;
   this.image = loadImage("Img/Mapa_del_bosque.png");
   World.add(world,this.body);

    }

    display(){

    var pos = this.body.position;
    rectMode(CENTER);
    imageMode(CENTER),
    image(this.image,0,0,this.width,this.height);
    
    }

}