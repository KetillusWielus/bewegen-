//let X = 
//let Y = 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('skyblue');

  strokeWeight(0);

  //bergen
  fill(80);
  triangle(100,350,300,350,200,100);
  triangle(0,350,200,350,125,230);
  
  //weg
  fill("grey");
  rect(0,350,400,50);

  fill("white");
  rect(0,370,400,10);

  //boomstam
  fill("brown");
  rect(100,270,20,80);
  rect(350,270,30,80);

  //boom
  fill ("green");
  circle(110,260,70);
  circle(365,250,90);

  //zon
  fill('yellow');
  circle(50,200,60);

  //wolken, zulke zijn alleen te vinden in Dubai
  fill('white');
  circle(100,50,30);

  fill('white');
  circle(120,40,50);

  fill('white');
  circle(300,40,60);

  fill('white');
  circle(340,30,40);

  //auto's, zulke zijn ook alleen te vinden in Dubai
  fill("red");
  rect(250,370,50,20);
  rect(150,370,50,20);


  
  

}
