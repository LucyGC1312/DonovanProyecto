const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var Resultado = "Img/Mapa_de_la_ciudad.png";
var jake;
var ana,jorge,emilia;
var gameState = 0
var activo 
var Resultado2 = "Img/Mapa_de_la_ciudad.png";
 


function preload(){

M1 = loadImage("Img/Mapa_de_la_ciudad.png");
M2 = loadImage("Img/Mapa_de_la_nave.png");
M3 = loadImage("Img/Mapa_del_bosque.png");
M4 = loadImage("Img/Mapa_del_circo.png");

R1 =  loadImage("Img/Mapa_de_la_ciudad.png");
R2 =  loadImage("Img/Mapa_de_la_nave.png");
R3 =  loadImage("Img/Mapa_del_bosque.png");
R4 =  loadImage("Img/Mapa_del_circo.png");

inicio();
//personajes();


}



function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  personajes()

}

function draw() {
  if(Resultado)
  background(Resultado); 
  Engine.update(engine);
  
if(keyDown("space")&&gameState===0){

gameState=1;

}else if(gameState===1){
if(keyDown("r")){
  gameState=0;
}
}else{

}

personaje.display();
  drawSprites();
}


function inicio(){

  var rand = Math.round(random(1,4)); 
  switch(rand) 
  { case 1:Resultado = M1 ;break;
     case 2:Resultado = M2 ; break;
      case 3: Resultado = M3 ; break;
       case 4: Resultado = M4 ; break;
        default: break; }

}

function personajes(){
  
  var rand2 = Math.round(random(1,4)); 
  switch(rand2) 
  { case 1:Resultado2 = R1 ;
    personaje= new Ana(Math.round(random(50,windowWidth-50)),Math.round(random(50,windowHeight-50)),Resultado2);    break;
     case 2:Resultado2 = R2 ; 
     personaje= new Emilia(Math.round(random(50,windowWidth-50)),Math.round(random(50,windowHeight-50)),Resultado2);
     break;
      case 3: Resultado2 = R3 ;
      personaje= new Jake(Math.round(random(50,windowWidth-50)),Math.round(random(50,windowHeight-50)),Resultado2);
      break;
       case 4: Resultado2 = R4 ; 
       personaje= new Jorge(Math.round(random(50,windowWidth-50)),Math.round(random(50,windowHeight-50)),Resultado2);
       break;
        default: break; }

 
}
