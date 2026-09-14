let sunPosX = 100; //Dit is ook de maan
let sunPosY = 100; //Dit is ook de maan

let lightPosY = 425;
let lightVar = 1;
let car1PosX = 450;
let car1PosY = 575;

let car2PosX = 150;
let car2PosY = 580;

let tree1PosX = 200;
let tree2PosX = 550;

//let cloud1PosX
//let cloud1PosY

//let cloud2PosX
//let Cloud2PosY

//kleuren 
let mountainColor = "";
let whiteColor = "";
let sunColor = "";
let lightColor = "";

//booleans
let isDay = true;
let greenLight = true;
let redLight = false;
let orangeLight = false;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  // day and night cycle switch
  if (isDay == true) {
    background('skyblue');
    sunColor = "yellow";
    mountainColor = "grey";
    whiteColor = "white";
  } else {
    background('black');
    sunColor = "grey";
    mountainColor = "black";
    whiteColor = "grey";
  }

  // avond en ochtend
  // if (sunPosX <= 200 || sunPosX >= 600) {
  //  background("purple");
  // } elseif (isDay == true); {
  //    sunColor = "orange";
  //  } elseif (isDay == false); {
  //    sunColor = "white";
  // }
  

  strokeWeight(0);

  //zon en maan
  fill(sunColor);
  circle(sunPosX,sunPosY,60);

  if (sunPosX == 800) {
    sunPosX = 0;
    if (isDay == true) {
      isDay = false;
    } else {
      isDay = true;
    }
  }
  
  sunPosX += 1; 
  

  // landschap 
  fill(mountainColor);
  triangle(100,550,600,550,300,150);
  triangle(0,550,300,550,100,170);

  // weg
  rect (0,550,800,50);
  fill (whiteColor);
  rect (0,570,800,10);
  
  // stoplicht 
  fill(mountainColor);

  rect(700,300,50,150,10);
  rect(715,450,20,100);

  //lichten
  fill('black')
  circle(725,425,30);
  circle(725,375,30);
  circle(725,325,30);


  // echte licht

  fill(lightColor)
  circle (725,lightPosY, 30);

}

