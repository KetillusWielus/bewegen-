//te veel variables
let time = 0;

let sunPosX = 400; //Dit is ook de maan

let lightPosY = 475;
let lightVar = 1;

let car1PosX = -50;
let car2PosX = 400;

let stopX = 600;

let leafX1 = 0;
let leafX2 = 0;
let leafX3 = 0;

let cloud1PosX = 0;
let cloud2PosX = 200;
let cloud3PosX = 600;

//kleuren
let mountainColor = "";
let whiteColor = "";
let sunColor = "";
let lightColor = ""; 
let treeColor = "";
let roadColor = "";
let leafColor = "";
let cloudColor = "";
let carColor = "";
let car2Color = "";
let tireColor = "";

// voor de auto

let colors = ['green', 'red', 'blue', 'yellow', 'black', 'grey', 'white'];

//booleans
let isDay = true;
let leafMovingRight = true;
let shouldStop = false;
let couldStop = false;
let stopCar1 =  false;
let stopCar2 = false;

function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  if (keyCode === ENTER) {
		if (lightVar == 3) {
      lightVar = 1;
    } else {
      lightVar += 1;
    }
	} 
}

function draw() {
  // day and night cycle switch
  if (isDay == true) {
    background('skyblue');
    sunColor = "#eacb19";
    mountainColor = "#6b6b6b";
    roadColor = "#919191"
    whiteColor = "#a5a5a4";
    treeColor = "#3c3610";
    leafColor = "#2d8939";
    cloudColor = "white";
    tireColor = "black";  
  } else {
    background('#111111');
    sunColor = "grey";
    mountainColor = "#0a0a0a";
    roadColor = "black";
    whiteColor = "#161616";
    treeColor = "black";
    leafColor = "black";
    cloudColor = "black";
    carColor = "black";
    car2Color = "black";
    tireColor = "black";
  }
 
  strokeWeight(0);

  //zon en maan
  fill(sunColor);
  circle(sunPosX,100,60);

  if (sunPosX == 850) {
    sunPosX = -50;
    if (isDay == true) {
      isDay = false;
    } else {
      isDay = true;
      carColor = random(colors);
      car2Color = random(colors); 
    }
  }
  
  sunPosX += 1; 
  
  // wolken
  fill(cloudColor);

  ellipse(cloud1PosX,40,200,80);
  ellipse(cloud2PosX,70,80,50);
  ellipse(cloud3PosX,120,60,40);

  if (cloud1PosX >= 950) {
    cloud1PosX = -75;
  } else if (cloud2PosX >= 950) {
    cloud2PosX = -20;
  } else if (cloud3PosX >= 950) {
    cloud3PosX = -20;
  }

  cloud1PosX += 0.5;
  cloud2PosX += 1;
  cloud3PosX += 2;

  // landschap 
  fill(mountainColor);
  triangle(100,550,600,550,300,150);
  triangle(-50,550,300,550,100,170);

  // weg
  fill(roadColor)
  rect (0,550,800,50);
  fill (whiteColor);
  rect (0,570,800,10);

  //bomen

  //stam
  fill(treeColor);

  rect(50,475,30,80);
  rect(200,475,30,80);
  rect(600,475,30,80);

  //bladeren
  fill(leafColor)

  //rechterbladeren

  circle(leafX1 + 80,455,50);
  circle(leafX1 + 230,455,50);
  circle(leafX1 + 630,455,50);

  // linker bladeren

  circle(leafX2 + 50,485,50);
  circle(leafX2 + 200,485,50);
  circle(leafX2 + 600,485,50);

  //boven bladeren

  circle(leafX3 + 50,445,50);
  circle(leafX3 + 200,445,50);
  circle(leafX3 + 600,445,50);

  // bladeren laten bewegen

   if (time == 10) {
   if (leafMovingRight == true) {
     leafMovingRight = false;
     time = 0;
   } else {
      leafMovingRight = true;
      time = 0;
    }
  }

  if (leafMovingRight == true) {
    leafX1 +=1;
    leafX2 +=0.5;
    leafX3 +=0.2;
  } else  {
    leafX1 -=1;
    leafX2 -=0.5;
    leafX3 -=0.2;
  }

  // stoplicht 
  fill(mountainColor);

  rect(700,380,50,120,10);
  rect(715,500,20,50);

  //lichten
  fill('black')
  circle(725,405,30);
  circle(725,440,30);
  circle(725,475,30);

  // echte licht

  fill(lightColor);
  circle (725,lightPosY, 30);

  if (lightVar == 1) {
    lightColor = 'green';
    lightPosY = 475;
  } else if (lightVar == 2) {
    lightColor = 'orange';
    lightPosY = 440;
  } else {
    lightColor = 'red';
    lightPosY = 405;
  }

  //auto's

  //auto 2

  fill(car2Color);

  rect(car2PosX,520,80,40);
  rect(car2PosX,500,50,30);

  //banden
  fill(tireColor);
  circle(car2PosX + 20,560,30);
  circle(car2PosX + 60,560,30);

  if (car2PosX == 850) {
    car2PosX = -50;
    car2Color = random(colors);
  }

 //auto 1

  fill(carColor);

  rect(car1PosX,540,80,40);
  rect(car1PosX,520,50,30);

  //banden
  fill(tireColor);
  circle(car1PosX + 20,580,30);
  circle(car1PosX + 60,580,30);

  if (car1PosX == 850) {
    car1PosX = -50;
    carColor = random(colors);
  }

  // om de auto's te stoppen en met de boolean
  if (shouldStop == true) {
    if (car1PosX >= stopX) {
      car1PosX += 0;
    } else if (car2PosX >= stopX) {
      car2PosX += 0;
    } else if (car1PosX != stopX) {
      car1PosX += 1;
    } else if (car2PosX != stopX) {
      car2PosX += 0.5;
    }
  }

   if (couldStop == true) {
      car1PosX += 1;
      car2PosX +=  0.5;
  }
  
  if (lightVar == 1) {
  car1PosX += 2;
  car2PosX += 1;
  }
 
  
  //om de auto's te stoppen
  if (lightVar == 3) {
    shouldStop = true;
    couldStop = false;
  } else if (lightVar == 2) {
    couldStop = true;
    shouldStop = false;
  } else if (lightVar == 1)  {
    shouldStop = false;
    couldStop = false;
  }

  // boom 3 van links
  fill(treeColor);
  rect(400,475,40,125);

  //bladeren van boom

  fill(leafColor)
  circle(leafX1 + 440,455,70);
  circle(leafX2 + 400,495,70);
  circle(leafX3 + 400,435,70);

  time += 1
}