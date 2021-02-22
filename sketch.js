  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Body=Matter.Body;
  const Constraint = Matter.Constraint;
  var backgroundImg= "grey";
  var score = 0;

  function preload(){
    getBackgroundImage(day.jpg);
  }

  function setup() {

    createCanvas(1516,725);
    engine = Engine.create();
    world = engine.world;
   ground=new Ground(width/2, 685, width, 25);
    Platform1=new Ground(500, 480, 280, 25);
    Platform2=new Ground(1000,400,190,25);
    block1 = new Box(395, 450, 30, 40);
    block2 = new Box(425, 450, 30, 40);
    block3 = new Box(455, 450, 30, 40);
    block4 = new Box(485, 450, 30, 40);
    block5 = new Box(515, 450, 30, 40);
    block6 = new Box(545, 450, 30, 40);
    block7 = new Box(575, 450, 30, 40);
    block8 = new Box(605, 450, 30, 40);
    block9 = new Box(410, 407, 30, 40);
    block10 = new Box(440, 407, 30, 40);
    block11 = new Box(470, 407, 30, 40);
    block12 = new Box(500, 407, 30, 40);
    block13 = new Box(530, 407, 30, 40);
    block14 = new Box(560, 407, 30, 40);
    block15 = new Box(590, 407, 30, 40);
    block16 = new Box(425, 367, 30, 40);
    block17 = new Box(455, 367, 30, 40);
    block18 = new Box(485, 367, 30,40);
    block19 = new Box(515, 367, 30, 40);
    block20 = new Box(545, 367, 30, 40);
    block21 = new Box(575, 367, 30, 40);
    block22 = new Box(440, 327, 30, 40);
    block23 = new Box(470, 327, 30, 40);
    block24 = new Box(500, 327, 30, 40);
    block25 = new Box(530, 327, 30, 40);
    block26 = new Box(560, 327, 30, 40);

    block27 = new Box(455, 287, 30, 40);
    block28 = new Box(485, 287, 30, 40);
    block29 = new Box(515, 287, 30, 40);
    block30 = new Box(545, 287, 30, 40);

    block31 = new Box(470, 247, 30, 40);
    block32 = new Box(500, 247, 30, 40);
    block33 = new Box(530, 247, 30, 40);
    
    block34 = new Box(485, 217, 30, 40);
    block35 = new Box(515, 217, 30, 40);

    block36 = new Box(500, 157, 30, 40);

    block37 = new Box(940, 370, 30, 40);
    block38 = new Box(970, 370, 30, 40);
    block39 = new Box(1000, 370, 30, 40);
    block40 = new Box(1030, 370, 30, 40);
    block41 = new Box(1060, 370, 30, 40);

    block42 = new Box(955, 335, 30, 40);
    block43 = new Box(985, 335, 30, 40);
    block44 = new Box(1015, 335, 30, 40);
    block45 = new Box(1045, 335, 30, 40);

    block46 = new Box(970, 290, 30, 40);
    block47 = new Box(1000, 290, 30, 40);
    block48 = new Box(1030, 290, 30, 40);
    
    block49 = new Box(985, 250, 30, 40);
    block50 = new Box(1015, 250, 30, 40);

    block51 = new Box(1000, 210, 30, 40);




    

    pentagon=new polygon(200,390,20);

    sling=new SlingShot(pentagon.body,{x:180,y:390})
  }

  function draw() {
    Engine.update(engine);
    
    background(backgroundImg);


    Platform1.display();
    Platform2.display();
    ground.display();

    fill("cyan")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    fill("cyan")
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
   
    fill("cyan")
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    fill("cyan")
    block31.display();
    block32.display();
    block33.display();
   
    fill("cyan")
    block34.display();
    block35.display();

    fill("cyan")
    block36.display();

    fill("cyan")
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();

    fill("cyan")
    block42.display();
    block43.display();
    block44.display();
    block45.display();
    block46.display();
    block47.display();
    block48.display();

    block49.display();
    block50.display();

    fill("cyan")
    block51.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score(); 
    block10.score();
    block11.score(); 
    block12.score();
    block13.score(); 
    block14.score();
    block15.score(); 
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score(); 
    block30.score();
    block31.score(); 
    block32.score();
    block33.score(); 
    block34.score();
    block35.score(); 
    block36.score();
    block37.score();
    block38.score();
    block39.score();
    block40.score();
    block41.score();
    block42.score();
    block43.score();
    block44.score();
    block45.score(); 
    block46.score();
    block47.score();
    block48.score();
    block49.score();
    block50.score();
    block51.score();
    
    sling.display();
    pentagon.display();
        
    fill("yellow");
    strokeWeight(0);
    text("Score_"+score,200,75);
    fill("white");
    strokeWeight(0);
    textSize(30)
    text("Press Space",width/2-300,80);
              }
   function mouseDragged()
  {
    Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased()
  {
    sling.fly();
        }
  function keyPressed(){
      if(keyCode===32)
    {
      Matter.Body.setPosition(pentagon.body,{x:175,y:390});
      sling.attacher(pentagon.body);
    }
  }

  async function getBackgroundImage(){
      var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
      var responseJSON = await response.json()

      var datetime= responseJSON.datetime;
      var hour = datetime.slice(11, 13);

      if (hour>=7 && hour<=17){
          bg = "day.jpg"
      }
      else{
          bg = "night.jpg"
      }
      backgroundImg = loadImage(bg);
      console.log(backgroundImg)
  }
