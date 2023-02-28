function level1() {
  for (let i = 0; i < 14; i++) {
    if ([0, 1, 13].includes(i)) {
      moveUp();
    } else if ([2, 3, 4].includes(i)) {
      moveRight();
    } else if ([10, 11, 12].includes(i)) {
      moveLeft();
    } else {
      moveDown();
    }
  }
}

function level2() {
  for (let i = 0; i < 19; i++) {
    if ([0, 1, 14, 15].includes(i)) {
      moveDirection("up");
    } else if ([2, 3, 6, 7].includes(i)) {
      moveDirection("right");
    } else if ([12, 13, 16, 17].includes(i)) {
      moveDirection("left");
    } else {
      moveDirection("down");
    }
  }
}

function level3() {
  for (let i = 0; i < 8; i++) {
    moveDirection("down");
  }
}

function level4(turn) {
  for (let i = 0; i < 12; i++) {
    turn = "down";
    if (i % 2 === 1) {
      turn = "right";
    }
    moveDirection(turn);
  }
}

function level5() {
  for (let i = 0; i < 5; i++) {
    moveDirection("down");
  }
}

function giveComputerAnswer(a, b) {
  return Math.floor(Math.pow(a,4) / (a+b));
}

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "level1", content: level1, type: "function" },
    { name: "level2", content: level2, type: "function" },
    { name: "level3", content: level3, type: "function" },
    { name: "level4", content: level4, type: "function" },
    { name: "level5", content: level5, type: "function" },
    { name: "giveComputerAnswer", content: giveComputerAnswer, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };