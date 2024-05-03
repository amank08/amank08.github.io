let x, y;
let currentangle = 0;
let step = 20;
let angle = 90;

let thestring = 'A';
let numloops = 5;
let therules = [];
therules[0] = ['A', '-BF+AFA+FB-'];
therules[1] = ['B', '+AF-BFB-FA+'];

let whereinstring = 0;


function setup() {
  createCanvas(710, 400);
  background(16, 25, 25);
  stroke(0);

  x = 0;
  y = height - 1;

  for (let i = 0; i < numloops; i++) {
    thestring = lindenmayer(thestring);
  }
}

function draw() {
  drawIt(thestring[whereinstring]);
  whereinstring++;
  if (whereinstring > thestring.length - 1) whereinstring = 0;
}

function lindenmayer(s) {
  let outputstring = '';
  for (let i = 0; i < s.length; i++) {
    let ismatch = 0;
    for (let j = 0; j < therules.length; j++) {
      if (s[i] == therules[j][0]) {
        outputstring += therules[j][1];
        ismatch = 1;
        break;
      }
    }
    if (ismatch == 0) outputstring += s[i];
  }
  return outputstring;
}

function drawIt(k) {
  if (k == 'F') {
    let x1 = x + step * cos(radians(currentangle));
    let y1 = y + step * sin(radians(currentangle));
    line(x, y, x1, y1);
    x = x1;
    y = y1;
  } else if (k == '+') {
    currentangle += angle;
  } else if (k == '-') {
    currentangle -= angle;
  }

  let r = random(0, 100);
  let g = random(128, 255);
  let b = random(0, 50);
  let a = random(50, 100);

  let radius = 0;
  radius += random(0, 15);
  radius += random(0, 15);
  radius += random(0, 15);
  radius /= 3;

  fill(r, g, b, a);
  ellipse(x, y, radius, radius);
}
