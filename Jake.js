class Jake extends BaseClass {
  constructor(x,y,img){
    super(x,y,50,50);
    this.image = img;
   
  }

  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  if(gameState===1){
      super.display();
  }else{
    World.remove(world, this.body);
  
  }
  
  }
  }