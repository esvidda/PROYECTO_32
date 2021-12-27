var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

  //4 crea las variables como arreglos.
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

//separación de elementos
var divisionHeight=300;
var score =0;
var count =0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //5 crea con los arreglos anteriores las divisiones para el puntaje

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

  //  for (var k = 0; k <=width; k = k + 80) {
  //   divisions.pop(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  // }

  //6 con el arreglo de plinkos crea los plinkos espaciados de 100
  //en 100, revisa el ejemplo con el primer renglon
  //intercala en horizontal 50 puntos
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

   for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
   }

   for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko (j, 375));
   }
}
 
function draw() {
  background("black");
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
      if(ball.body.position.y > 760){
        if(ball.body.position.x < 300){
          score +=500;
          ball=null;
          count++;
          if(count >= 5)gameState = "end"
        }
        else if(ball.body.position.x > 301 && ball.body.position.x < 600){
          score +=100;
          ball=null;
          count++;
          if(count >= 5)gameState = "end"
        }
        else if(ball.body.position.x > 601){
          score +=200;
          ball=null;
          count++;
          if(count >= 5)gameState = "end"
        }
      }
  
    }
    if(gameState === "end"){
      textSize(100);
      text("GAME OVER", 150, 250)
    }
   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState === "play"){
  ball=new Ball(mouseX, 10, 10, 10);  
  }

}

