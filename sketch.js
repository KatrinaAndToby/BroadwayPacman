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

let redBlocks = []; // Array to store red blocks
let yellowBlocks = []; // Array to store yellow blocks
let blueBlocks = []; // Array to store blue blocks
let grayBlocks = []; // Array to store gray blocks
let canvas; // Variable for the canvas element

let moveInterval = 80; // Interval for block movement in milliseconds
let lastMoveTime = 0; // Time tracking for block movement

// Pacman initial properties
let pacmanX, pacmanY; // Pacman's position
let pacmanAngle = 0; // Angle for Pacman's mouth animation
let mouthOpening = true; // Controls mouth opening animation
let pacmanSize = 1.5; // Scaling factor for Pacman's size
let cellWidth, cellHeight; // Width and height of each cell
let pacmanDirection = 'RIGHT'; // Initial direction Pacman faces

let moveDelay = 80; // Delay for Pacman's movement speed
let lastMoveTimePac = 0; // Time tracking for Pacman's movement

// Flags to check if movement keys are pressed
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

let score = 0; // Score tracking variable

let gamePaused = false; // Flag to check if the game is paused

function windowResized() {
  // Resizes and repositions the canvas when the window is resized
  resizeCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}

function setup() {
  // Initial setup for the canvas and game state
  canvas = createCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

  // Calculate cell width and height based on canvas dimensions and matrix size
  cellWidth = 558 / roadMetrics[0].length;
  cellHeight = 558 / roadMetrics.length;

  // Find a yellow block near the center to place Pacman
  for (let i = floor(roadMetrics.length / 3); i < floor(2 * roadMetrics.length / 3); i++) {
    for (let j = floor(roadMetrics[0].length / 3); j < floor(2 * roadMetrics[0].length / 3); j++) {
      if (roadMetrics[i][j] === 1) {
        pacmanX = cellWidth * j + cellWidth / 2; // Center Pacman in the cell
        pacmanY = cellHeight * i + cellHeight / 2;
        break;
      }
    }
    if (pacmanX && pacmanY) break; // Stop searching once Pacman's position is set
  }

  // Set a recurring function to move blocks at regular intervals
  setInterval(() => {
    moveBlocks(); // Call the function to move blocks
  }, 80);

  // Initialize block objects based on the matrix
  for (let i = 0; i < roadMetrics.length; i++) {
    let row = roadMetrics[i];
    for (let j = 0; j < row.length; j++) {
      let x = (558 / row.length) * j;
      let y = (558 / roadMetrics.length) * i;
      let width = 558 / row.length;
      let height = 558 / roadMetrics.length;

      // Create block objects based on matrix values and push them to the corresponding arrays
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

// Block class definition to represent blocks on the canvas
class Block {
  constructor(color, x, y, width, height) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hasMoved = false; // Flag to indicate if the block has moved
  }
}

function moveBlocks() {
  // Function to move blocks around the canvas
  let cellWidth = 558 / roadMetrics[0].length;
  let cellHeight = 558 / roadMetrics.length;

  for (let block of [...redBlocks, ...blueBlocks]) {
    if (!block.hasMoved) {
      // Change the initial position to yellow after the block moves
      yellowBlocks.push(new Block(color(225, 201, 41), block.x, block.y, block.width, block.height));
      block.hasMoved = true; // Mark block as moved
      block.direction = floor(random(4)); // Assign a random direction
    }

    let newX = block.x;
    let newY = block.y;
    let directionsTried = []; // Array to track tried directions

    // Loop to attempt movement in different directions
    let canMove = false;
    while (directionsTried.length < 4) {
      switch (block.direction) {
        case 0: newY = block.y - cellHeight; newX = block.x; break; // Up
        case 1: newX = block.x + cellWidth; newY = block.y; break; // Right
        case 2: newY = block.y + cellHeight; newX = block.x; break; // Down
        case 3: newX = block.x - cellWidth; newY = block.y; break; // Left
      }

      // Check if the new position is within bounds and on a valid road cell
      let i = round(newY / cellHeight);
      let j = round(newX / cellWidth);

      if (
        i >= 0 &&
        i < roadMetrics.length &&
        j >= 0 &&
        j < roadMetrics[0].length &&
        roadMetrics[i][j] !== 0
      ) {
        block.x = newX; // Update block position
        block.y = newY;
        canMove = true;
        break;
      } else {
        // Record direction and choose a new one randomly if movement is not possible
        directionsTried.push(block.direction);
        do {
          block.direction = floor(random(4));
        } while (directionsTried.includes(block.direction));
      }
    }
  }
}

function drawAllBlocks() {
  // Draw all blocks on the canvas
  for (let yellowBlock of yellowBlocks) {
    fill(yellowBlock.color);
    noStroke();
    rect(yellowBlock.x, yellowBlock.y, yellowBlock.width, yellowBlock.height);
  }
  for (let grayBlock of grayBlocks) {
    fill(grayBlock.color);
    noStroke();
    rect(grayBlock.x, grayBlock.y, grayBlock.width, grayBlock.height);
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
}

function drawPacman() {
  // Draw Pacman on the canvas
  fill(255, 255, 0);
  noStroke();

  // Control mouth opening and closing animation
  if (mouthOpening) {
    pacmanAngle += 0.05;
    if (pacmanAngle > QUARTER_PI) {
      mouthOpening = false;
    }
  } else {
    pacmanAngle -= 0.05;
    if (pacmanAngle < 0) {
      mouthOpening = true;
    }
  }

  // Adjust Pacman's arc based on direction
  let startAngle, endAngle;
  switch (pacmanDirection) {
    case 'UP':
      startAngle = -HALF_PI + pacmanAngle;
      endAngle = -HALF_PI - pacmanAngle;
      break;
    case 'DOWN':
      startAngle = HALF_PI + pacmanAngle;
      endAngle = HALF_PI - pacmanAngle;
      break;
    case 'LEFT':
      startAngle = PI + pacmanAngle;
      endAngle = PI - pacmanAngle;
      break;
    case 'RIGHT':
    default:
      startAngle = pacmanAngle;
      endAngle = TWO_PI - pacmanAngle;
      break;
  }

  arc(pacmanX, pacmanY, cellWidth * pacmanSize, cellHeight * pacmanSize, startAngle, endAngle, PIE);
}

function keyPressed() {
  // Update Pacman's direction based on the pressed key
  if (keyCode === UP_ARROW) {
    pacmanDirection = 'UP';
    movingUp = true;
  } else if (keyCode === DOWN_ARROW) {
    pacmanDirection = 'DOWN';
    movingDown = true;
  } else if (keyCode === LEFT_ARROW) {
    pacmanDirection = 'LEFT';
    movingLeft = true;
  } else if (keyCode === RIGHT_ARROW) {
    pacmanDirection = 'RIGHT';
    movingRight = true;
  }
}

function keyReleased() {
  // Stop moving in the direction when the key is released
  if (keyCode === UP_ARROW) {
    movingUp = false;
  } else if (keyCode === DOWN_ARROW) {
    movingDown = false;
  } else if (keyCode === LEFT_ARROW) {
    movingLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    movingRight = false;
  }
}

function movePacman(dx, dy) {
  // Move Pacman by checking if the new position is on a valid road cell
  let newX = pacmanX + dx;
  let newY = pacmanY + dy;

  let i = floor(newY / cellHeight);
  let j = floor(newX / cellWidth);
  if (
    i >= 0 &&
    i < roadMetrics.length &&
    j >= 0 &&
    j < roadMetrics[0].length &&
    roadMetrics[i][j] !== 0
  ) {
    pacmanX = newX;
    pacmanY = newY;
  }
}

function checkCollision() {
  // Check for collisions with red and blue blocks
  for (let i = redBlocks.length - 1; i >= 0; i--) {
    let block = redBlocks[i];
    if (dist(pacmanX, pacmanY, block.x + block.width / 2, block.y + block.height / 2) < cellWidth * pacmanSize / 2) {
      redBlocks.splice(i, 1); // Remove the block
      score++; // Increase score
    }
  }

  for (let i = blueBlocks.length - 1; i >= 0; i--) {
    let block = blueBlocks[i];
    if (dist(pacmanX, pacmanY, block.x + block.width / 2, block.y + block.height / 2) < cellWidth * pacmanSize / 2) {
      blueBlocks.splice(i, 1); // Remove the block
      score++; // Increase score
    }
  }
}

function displayVictoryMessage() {
  // Display a victory message if all blocks are eaten
  stroke(85, 85, 85); // Dark gray stroke for clarity
  strokeWeight(4);
  fill(255, 240, 150); // Light yellow fill for visibility
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Congratulations! You WON!", width / 2, height / 2);
}

function draw() {
  // Main drawing function
  background(242, 243, 238); // Set background color
  drawAllBuildings(); // Draw buildings
  drawAllBlocks(); // Draw blocks

  checkCollision(); // Check Pacman's collision with blocks

  // Display score
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);

  // Check the time difference from the last move for movement control
  if (millis() - lastMoveTimePac > moveDelay) {
    if (movingUp) {
      movePacman(0, -cellHeight);
    }
    if (movingDown) {
      movePacman(0, cellHeight);
    }
    if (movingLeft) {
      movePacman(-cellWidth, 0);
    }
    if (movingRight) {
      movePacman(cellWidth, 0);
    }
    lastMoveTimePac = millis();
  }

  if (!gamePaused) {
    drawPacman(); // Draw Pacman if game is not paused

    // Check if no red or blue blocks are left
    if (redBlocks.length === 0 && blueBlocks.length === 0) {
      gamePaused = true; // Pause the game if all blocks are eaten
    }
  } else {
    displayVictoryMessage(); // Display victory message
  }
}

// Draws individual buildings on the canvas
function drawBuildings(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
  noStroke();
}

function drawAllBuildings(){
  // Draw all the predefined buildings
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
  // Draws individual building rectangles
  fill(color);
  rect(x,y,width,height);
  noStroke();
}