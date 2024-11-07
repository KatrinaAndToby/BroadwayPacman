let roadMetrics = [
  [0,1,0,2,0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,1,0,2,0],
  [1,3,1,1,1,1,1,1,3,1,4,1,1,1,1,1,4,1,1,1,1,1,1,1,4,1,4,1,4,1,1,1,1,4,4,1,1,1,4,3,1,4,1,3,4,1,4],

  [0,4,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,3,0,4,0,2,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,1,0,4,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,4,0,1,0],
  [0,3,0,2,0,0,3,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,2,0],
  [0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,1,0,0,0,1,0],
  [0,1,0,4,0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,4,0],

  [1,2,1,1,1,1,3,1,4,4,2,1,4,1,3,1,1,4,1,1,1,1,1,1,4,3,1,2,4,1,1,1,1,1,1,4,1,1,4,3,4,1,2,1,4,3,1],

  [0,1,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,4,0,4,0],
  [0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,3,0,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,3,0],
  [0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0],
  [0,1,0,4,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,4,0,1,0],
  [0,2,0,1,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,1,0,1,0],
  [0,1,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,3,0,4,0,2,0],
  [0,1,0,1,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],
  [0,4,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0],

  [1,2,1,3,1,1,4,2,1,1,4,3,1,1,4,1,3,1,2,1,1,1,3,1,1,2,1,3,1,1,2,1,1,1,2,1,1,1,1,3,1,2,1,4,3,4,1],

  [0,0,0,1,0,0,3,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,1,0],
  [0,0,0,1,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,1,0,4,0],

  [1,2,4,3,1,1,3,4,1,1,4,3,1,1,2,4,4,1,2,4,4,4,3,1,1,4,1,4,1,1,2,4,1,4,1,1,3,1,1,2,1,1,4,2,1,2,4],

  [0,0,0,1,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,2,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,4,0,0,0,0,0,0,0,3,0,0,0,0,0,3,0],
  [0,0,0,1,0,0,3,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0],
  [0,0,0,4,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],

  [1,1,4,3,1,1,3,1,1,1,1,3,1,1,4,1,2,1,1,2,4,4,2,1,1,4,1,4,1,1,1,2,1,3,4,4,3,1,1,2,1,1,1,3,4,2,1],

  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0],

  [1,1,4,2,1,1,3,1,1,4,1,3,1,1,4,1,1,3,1,1,2,1,1,3,1,4,1,4,1,1,1,4,1,3,1,3,1,1,1,3,1,1,1,2,4,1,2],

  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0],
  [0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [1,3,1,2,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,2,0],
  [0,0,0,2,1,1,2,1,1,4,1,3,1,1,1,4,1,1,3,1,1,2,1,3,1,4,2,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,4,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,3,0,3,0],
  [1,3,1,2,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
  [0,0,0,1,0,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,3,1,1,1,4,1,2,0],
  [0,0,0,1,0,0,1,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  
  [1,4,1,3,1,1,3,1,1,2,4,3,1,1,1,4,1,1,3,1,2,1,3,2,1,3,1,2,1,3,1,2,1,3,1,1,4,1,1,2,1,1,3,1,1,2,1],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0],
  [0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [0,0,0,4,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
  [1,1,4,2,1,1,3,1,1,2,1,3,1,4,1,1,4,1,3,1,3,2,2,2,1,4,1,4,1,2,1,3,1,3,1,1,4,1,1,3,1,1,2,1,1,2,1],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,0],
  [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]
];

let redBlocks = [];
let yellowBlocks = [];
let blueBlocks = [];
let grayBlocks = [];
let canvas;


function windowResized() {
  // Resize the canvas and reposition it to be centered when the window is resized
  resizeCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}

function setup() {
  canvas = createCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  // Initialize the blocks
  for (let i = 0; i < roadMetrics.length; i++) {
    let row = roadMetrics[i];
    for (let j = 0; j < row.length; j++) {
      let x = (558 / row.length) * j;
      let y = (558 / roadMetrics.length) * i;
      let width = 558 / row.length;
      let height = 558 / roadMetrics.length;

      switch (row[j]) {
        case 1:
          yellowBlocks.push(new Block(color(225, 201, 41), x, y, width, height));
          break;
        case 2:
          redBlocks.push(new Block(color(175, 57, 43), x, y, width, height));
          break;
        case 3:
          blueBlocks.push(new Block(color(57, 86, 151), x, y, width, height));
          break;
        case 4:
          grayBlocks.push(new Block(color(217, 214, 209), x, y, width, height));
          break;
        default:
          break;
      }
    }
  }
}

class Block {
  constructor(color, x, y, width, height) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hasMoved = false; // Initialize as not moved
  }
}

function moveBlocks() {
  let cellWidth = 558 / roadMetrics[0].length;
  let cellHeight = 558 / roadMetrics.length;

  for (let block of [...redBlocks, ...blueBlocks]) {
    if (!block.hasMoved) {
      // Change the initial position to yellow
      yellowBlocks.push(new Block(color(225, 201, 41), block.x, block.y, block.width, block.height));
      block.hasMoved = true; // Mark as moved
      block.direction = floor(random(4)); // Initialize a random direction
    }

    let newX = block.x;
    let newY = block.y;
    let directionsTried = []; // Record the directions tried

    // Try moving in the current direction
    let canMove = false;
    while (directionsTried.length < 4) {
      switch (block.direction) {
        case 0: newY = block.y - cellHeight; newX = block.x; break; // Up
        case 1: newX = block.x + cellWidth; newY = block.y; break;  // Right
        case 2: newY = block.y + cellHeight; newX = block.x; break; // Down
        case 3: newX = block.x - cellWidth; newY = block.y; break;  // Left
      }

      // Check if the new position is within the metrics range and is a valid road
      let i = round(newY / cellHeight);
      let j = round(newX / cellWidth);

      if (
        i >= 0 &&
        i < roadMetrics.length &&
        j >= 0 &&
        j < roadMetrics[0].length &&
        roadMetrics[i][j] !== 0
      ) {
        // Can move, update position
        block.x = newX;
        block.y = newY;
        canMove = true;
        break;
      } else {
        // Record the direction tried and randomly select a new direction
        directionsTried.push(block.direction);
        do {
          block.direction = floor(random(4));
        } while (directionsTried.includes(block.direction)); // Ensure not to repeat the same direction
      }
    }

    // If unable to move, stay in place
    if (!canMove) {
      block.x = block.x;
      block.y = block.y;
    }
  }
}

function drawAllBlocks() {
  moveBlocks();
  for (let yellowBlock of yellowBlocks) {
    fill(yellowBlock.color);
    noStroke();
    rect(yellowBlock.x, yellowBlock.y, yellowBlock.width, yellowBlock.height);
  }
  for (let redBlock of redBlocks) {
    fill(redBlock.color);
    noStroke();
    rect(redBlock.x, redBlock.y, redBlock.width, redBlock.height);
  }
  for (let blueBlock of blueBlocks) {
    fill(blueBlock.color);
    noStroke();
    rect(blueBlock.x, blueBlock.y, blueBlock.width, blueBlock.height);
  }
  for (let grayBlock of grayBlocks) {
    fill(grayBlock.color);
    noStroke();
    rect(grayBlock.x, grayBlock.y, grayBlock.width, grayBlock.height);
  }
}

function draw() {
  background(242, 243, 238); // Set background color
  drawAllBuildings(); // Draw all buildings
  drawAllBlocks(); // Draw all blocks

}

function drawBuildings(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
  noStroke();
}

function drawAllBuildings(){
  drawBuildings(83,33.90,48,18,color(225, 201, 41));
  drawBuildings(92,21.90,24,68,color(175,57,43));
  drawBuildings(92,52,24,13,color(217, 214, 209));

  
  drawBuildings(152,21.90,44,52,color(175,57,43));
  drawBuildings(162,38.90,23,20,color(217, 214, 209));
  drawBuildings(152,73.90,44,15.8,color(217, 214, 209));
 

  drawBuildings(498.5,56,36,20,color(76,102,197));

  drawBuildings(47,112,36,33,color(76,102,197));

  drawBuildings(83,160,47.6,33,color(225, 201, 41));
  drawBuildings(100,168,16,14,color(217, 214, 209));


  drawBuildings(360,100,50,100.5,color(76,102,197));
  drawBuildings(360,130,50,48,color(175,57,43));
  drawBuildings(375,145,25,20,color(225, 201, 41));

  drawBuildings(486.5,112,36,33,color(175,57,43));

  drawBuildings(95.5,212,22.5,35,color(225, 201, 41));
  drawBuildings(100,222,13,12,color(217, 214, 209));

  drawBuildings(83,277.2,47.6,35,color(175,57,43));

  drawBuildings(166,256,36,56.6,color(225, 201, 41));
  drawBuildings(166,270,36,42.6,color(76,102,197));
  drawBuildings(173,283,21.5,16,color(225, 201, 41));

  drawBuildings(225,212,36,101,color(225, 201, 41));
  drawBuildings(225,268,36,25,color(217, 214, 209));

  drawBuildings(392,256,43,77,color(175,57,43));
  drawBuildings(402,275,24,20,color(217, 214, 209));
  drawBuildings(392,333,43,15,color(217, 214, 209));

  drawBuildings(475,273,60,25,color(225, 201, 41));
  drawBuildings(499,273,12,25,color(175,57,43));

  drawBuildings(47,368.5,36,33.5,color(76,102,197));

  drawBuildings(475,368.5,36,33.5,color(76,102,197));
  drawBuildings(475,402,36,18,color(225, 201, 41));
  drawBuildings(475,420,36,33.5,color(175,57,43));

  drawBuildings(83,430,47.6,39,color(225, 201, 41));
  drawBuildings(100,439,16,13,color(217, 214, 209));

  drawBuildings(0,485,36,14,color(225, 201, 41));
  drawBuildings(18,485,14,14,color(175,57,43));

  drawBuildings(249,528,36,22,color(175,57,43));

}
function drawBuildings(x,y,width,height,color){
  fill(color);
  rect(x,y,width,height);
  noStroke();;
}



