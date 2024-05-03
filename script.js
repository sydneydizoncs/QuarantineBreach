const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

// 20x20
const rows = 20;
const cols = 20;
const cellSize = 40;

// draw grid
function drawGrid() {
  // rows
  for (let i = 0; i <= rows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * cellSize);
    ctx.lineTo(cols * cellSize, i * cellSize);
    ctx.stroke();
  }
  
  // columns
  for (let j = 0; j <= cols; j++) {
    ctx.beginPath();
    ctx.moveTo(j * cellSize, 0);
    ctx.lineTo(j * cellSize, rows * cellSize);
    ctx.stroke();
  }
}

function drawSquares() {
  // duo zombies and chests
  ctx.fillStyle = "rgb(139,69,19,0.5)"; // Light brown color const 
  squarePositions = [{x:4,y:3},{x:15,y:4},{x:10,y:8},{x:4,y:11},{x:8,y:16},{x:17,y:12}];
  squarePositions.forEach(pos => {
    const x = pos.x * cellSize;
    const y = pos.y * cellSize;
    // draw loot chests (brown)
    ctx.fillRect(x, y, cellSize, cellSize);
    // draw zombies
    ctx.fillStyle = "rgb(0,0,0,0.3)";
    ctx.fillRect((pos.x - 1) * cellSize, y, cellSize, cellSize);
    ctx.fillRect((pos.x + 1) * cellSize, y, cellSize, cellSize);
    ctx.fillStyle = "rgb(139,69,19,0.5)";
  });
}

// player coordinates
colorCell(10, 2, 'pink');
colorCell(16, 17, 'lightblue');

// solo zombie coordinates
colorCell(1, 2, 'gray');
colorCell(4, 7, 'gray');
colorCell(6, 6, 'gray');
colorCell(10, 12, 'gray');
colorCell(2, 17, 'gray');
colorCell(4, 13, 'gray');
colorCell(16, 8, 'gray');
colorCell(12, 18, 'gray');


function colorCell(x, y, color) {
  const padding = 1;
  ctx.fillStyle = color;
  ctx.fillRect(x * cellSize + padding, y * cellSize + padding, cellSize - 2 * padding, cellSize - 2 * padding);
}

// starting coords for Player 1
let prevX = 10;
let prevY = 2;
let clickCount = 0;

function updatePlayer1(newX, newY) {
  colorCell(prevX, prevY, 'white');
  colorCell(newX, newY, 'pink');
  prevX = newX;
  prevY = newY;
}

// starting coords for Player 2
let prevX2 = 16;
let prevY2 = 17;

function updatePlayer2(newX2, newY2) {
  colorCell(prevX2, prevY2, 'white');
  colorCell(newX2, newY2, 'lightblue');
  prevX2 = newX2;
  prevY2 = newY2;
}

// update health
 function updateHealth(sliderId, value) {
   const slider = document.getElementById(sliderId);
   const textInput = document.getElementById(sliderId.replace('slider', 'value'));
   slider.value = value;
   textInput.value = value;
}

// start at 100 health
updateHealth('slider1', 100);
updateHealth('slider2', 100);

// money values
let moneyValue1 = 0;
let moneyValue2 = 0;

// artifact values
let artifactValue1 = 0;
let artifactValue2 = 0;

// show log messages to screen instead of using alerts
function logToScreen(message) {
  const logElement = document.getElementById('log');
  logElement.innerHTML += message + '<br>';
  logElement.scrollTop = logElement.scrollHeight;
}       

drawGrid();
drawSquares();

const rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', function() {
  // roll logic here
  if (clickCount === 0){
    clickCount++;
    const newX = 15;
    const newY = 3;
    updatePlayer1(newX, newY);
    console.log("Game started.");
    console.log("Player 1 moved 6 squares.");
  } else if (clickCount === 1){
    clickCount++;
    const newX2 = 17;
    const newY2 = 13;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 5 squares.");
  } else if (clickCount === 2){
    clickCount++;
    colorCell(14, 4, 'white');
    updateHealth('slider1', 91);
    console.log("Player 1 killed a zombie! Player 1 lost 9 HP.");
  } else if (clickCount === 3){
    clickCount++;
    colorCell(16, 12, 'white');
    updateHealth('slider2', 89);
    console.log("Player 2 killed a zombie! Player 2 lost 11 HP.");
  } else if (clickCount === 4){
    clickCount++;
    colorCell(16, 4, 'white');
    updateHealth('slider1', 84);
    console.log("Player 1 killed a zombie! Player 1 lost 7 HP.");
  } else if (clickCount === 5){
    clickCount++;
    colorCell(18, 12, 'white');
    updateHealth('slider2', 81);
    console.log("Player 2 killed a zombie! Player 1 lost 8 HP.");
  } else if (clickCount === 6){
    clickCount++;
    colorCell(15, 4, 'white');
    artifactValue1 = 1;
    console.log("Player 1 looted a chest! They received the Mysterious Vial - Contains a potion that heals wounds for 15hp.");
  } else if (clickCount === 7){
    clickCount++;
    colorCell(17, 12, 'white');
    artifactValue1 = 1;
    console.log("Player 2 looted a chest! They received the 5 Hour Energy - Well, it’s empty, but littering is bad! Save the turtles, guys!");
  } else if (clickCount === 8){
    clickCount++;
    const newX = 15;
    const newY = 8;
    updatePlayer1(newX, newY);
    console.log("Player 1 moved 5 squares.");
  } else if (clickCount === 9){
    clickCount++;
    const newX2 = 11;
    const newY2 = 13;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 6 squares.");
  } else if (clickCount === 10){
    clickCount++;
    colorCell(16, 8, 'white');
    updateHealth('slider1', 75);
    console.log("Player 1 killed a zombie! It dropped nothing. Player 1 lost 9 HP. ");
  } else if (clickCount === 11){
    clickCount++;
    const newX2 = 10;
    const newY2 = 13;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 1 square.");
  } else if (clickCount === 12){
    clickCount++;
    console.log("Player 1 sold their artifact! ");
  } else if (clickCount === 13){
    clickCount++;
    console.log("Player 2 sold their artifact! ");
  } else if (clickCount === 14){
    clickCount++;
    const newX = 10;
    const newY = 9;
    updatePlayer1(newX, newY);
    console.log("Player 1 moved 5 squares.");
  } else if (clickCount === 15){
    clickCount++;
    colorCell(10, 12, 'white');
    updateHealth('slider2', 70);
    console.log("Player 2 killed a zombie! It dropped a Flashbang - Allows the player to skip a chosen player’s turn. Player 2 lost 11 HP. ");
  } else if (clickCount === 16){
    clickCount++;
    colorCell(11, 8, 'white');
    updateHealth('slider1', 63);
    console.log("Player 1 killed a zombie! Player 1 lost 12 HP.");
  } else if (clickCount === 17){
    clickCount++;
    const newX2 = 8;
    const newY2 = 15;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 4 squares.");
  } else if (clickCount === 18){
    clickCount++;
    colorCell(9, 8, 'white');
    updateHealth('slider1', 55);
    console.log("Player 1 killed a zombie! Player 1 lost 8 HP.");
  } else if (clickCount === 19){
    clickCount++;
    colorCell(7, 16, 'white');
    updateHealth('slider2', 62);
    console.log("Player 2 killed a zombie! Player 2 lost 8 HP. ");
  } else if (clickCount === 20){
    clickCount++;
    colorCell(10, 8, 'white');
    artifactValue1 = 1;
    console.log("Player 1 looted a chest! They received the Fluffy Kitten - No powerup. Meows occasionally.");
  } else if (clickCount === 21){
    clickCount++;
    colorCell(9, 16, 'white');
    updateHealth('slider2', 54);
    console.log("Player 2 killed a zombie! Player 2 lost 8 HP. ");
  } else if (clickCount === 22){
    clickCount++;
    const newX = 4;
    const newY = 9;
    updatePlayer1(newX, newY);
    console.log("Player 1 moved 6 squares.");
  } else if (clickCount === 23){
    clickCount++;
    colorCell(8, 16, 'white');
    artifactValue1 = 1;
    console.log("Player 2 looted a chest! They received the Hacking Tool - Allows the player to steal at most two held items of another player.");
  } else if (clickCount === 24){
    clickCount++;
    console.log("Player 1 sold their artifact! ");
  } else if (clickCount === 25){
    clickCount++;
    const newX2 = 12;
    const newY2 = 17;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 6 squares.");
  } else if (clickCount === 26){
    clickCount++;
    const newX = 4;
    const newY = 10;
    updatePlayer1(newX, newY);
    console.log("Player 1 moved 1 square.");
  } else if (clickCount === 27){
    clickCount++;
    colorCell(12, 18, 'white');
    updateHealth('slider2', 44);
    console.log("Player 2 killed a zombie! It dropped nothing. Player 2 lost 10 HP. ");
  } else if (clickCount === 28){
    clickCount++;
    colorCell(3, 11, 'white');
    updateHealth('slider1', 47);
    console.log("Player 1 killed a zombie! Player 1 lost 8 HP.");
  } else if (clickCount === 29){
    clickCount++;
    const newX2 = 6;
    const newY2 = 17;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 6 squares.");
  } else if (clickCount === 30){
    clickCount++;
    colorCell(5, 11, 'white');
    updateHealth('slider1', 41);
    console.log("Player 1 killed a zombie! Player 1 lost 6 HP.");
  } else if (clickCount === 31){
    clickCount++;
    const newX2 = 3;
    const newY2 = 17;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 3 squares.");
  } else if (clickCount === 32){
    clickCount++;
    colorCell(4, 11, 'white');
    artifactValue1 = 1;
    console.log("Player 1 looted a chest! They received the Glowing Sock - Why would someone leave this in an abandoned lab, I don’t know..");
  } else if (clickCount === 33){
    clickCount++;
    console.log("Player 2 used the Hacking Tool! Player 1's Glowing Sock was stolen!");
  } else if (clickCount === 34){
    clickCount++;
    const newX = 4;
    const newY = 12;
    updatePlayer1(newX, newY);
    console.log("Player 1 moved 2 squares.");
  } else if (clickCount === 35){
    clickCount++;
    const newX2 = 3;
    const newY2 = 12;
    updatePlayer2(newX2, newY2);
    console.log("Player 2 moved 5 squares.");
  } else if (clickCount === 36){
    clickCount++;
    colorCell(4, 13, 'white');
    updateHealth('slider1', 36);
    console.log("Player 1 killed a zombie! Player 1 lost 5 HP.");
  } else if (clickCount === 37){
    clickCount++;
    updateHealth('slider1', 27);
    console.log("Player 2 challenged Player 1 to a duel! Player 2 hit Player 1 for 9 HP.");
  } else if (clickCount === 38){
    clickCount++;
    updateHealth('slider2', 32);
    console.log("Player 1 hit Player 2 for 12 HP.");
  } else if (clickCount === 39){
    clickCount++;
    updateHealth('slider1', 21);
    console.log("Player 2 hit Player 1 for 6 HP.");
  } else if (clickCount === 40){
    clickCount++;
    updateHealth('slider2', 22);
    console.log("Player 1 hit Player 2 for 10 HP.");
  } else if (clickCount === 41){
    clickCount++;
    updateHealth('slider1', 15);
    console.log("Player 2 hit Player 1 for 6 HP.");
  } else if (clickCount === 42){
    clickCount++;
    updateHealth('slider2', 15);
    console.log("Player 1 hit Player 2 for 7 HP.");
  } else if (clickCount === 43){
    clickCount++;
    updateHealth('slider1', 7);
    console.log("Player 2 hit Player 1 for 8 HP.");
  } else if (clickCount === 44){
    clickCount++;
    updateHealth('slider2', 6);
    console.log("Player 1 hit Player 2 for 9 HP.");
  } else if (clickCount === 45){
    clickCount++;
    updateHealth('slider1', 0);
    colorCell(4, 12, 'white');
    console.log("Player 2 hit Player 1 for 11 HP. Player 1 died.");
  } else if (clickCount === 46){
    clickCount++;
    console.log("Player 2 sold their artifacts!");
    console.log("Player 2 has resigned.");
    console.log("RESULTS: ");
    console.log("Player 1: 20 Coins");
    console.log("Player 2: 40 Coins");
    console.log("Player 2 Wins!");
  }
  
  console.log = function(message) {
    logToScreen(message);
  };
  
});