

function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(120);
  r=random(7,7);
}

function draw() {
  background(0);
  strokeWeight(0.7); 
  push();
  for (let i = 0; i < 20; i++) {
  let a = random(255);
  let b = random(255);
  let c = random(255);
   
  translate(0,0,0);
 rotateX(frameCount * 0.002);
 rotateY(frameCount * 0.002);
 rotateZ(PI/3);
 //rotate(15)
  fill(color(a,b,c));
  box(75);}
    pop();
 

for (let k = -4; k <=4; k++) {
  for (let l = -4; l<=4; l++) {
    for(let m = -4; m<=4; m++) {
     let x = k*50;
     let y = l*50;
     let z = m*50;
 push();
rotateX(frameCount * -0.02);
 rotateY(frameCount * -0.02);
 rotateZ(PI/3);
      strokeWeight(0.1);
  translate(x,y,z);
  fill(color(x,y,z));
      box(random(0,5))
 pop();
}
 } 
}
}