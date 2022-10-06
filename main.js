"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = [];
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let solution = "";

const printBoard = () => {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
};

const generateSolution = () => {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateHint = (guess) => {
  let solutionArray = solution.split("");

  let guessArray = guess.split("");

  let correctLetterLocations = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    if (guessArray[i] === solutionArray[i]) {
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  // Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray.

  let correctLetters = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    let guessedLetter = guessArray[i];

    // Save that index in a variable called targetIndex.

    let targetIndex = solutionArray.indexOf(guessedLetter);

    // Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray.
    // Now, if targetIndex is greater than -1(it exists in the array), increment correctLetters and set the item in solutionArray at that index equal to null.

    if (targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex] = null;
    }
  }
  return `${correctLetters}-${correctLetterLocations}`;

  // If the guess contains any mutual characters return a hint
  // if any of the mutual characters are in the right spot, return another hint
};

const mastermind = (guess) => {
  // should detect a win

  if (guess === solution) {
    console.log("Winner Winner!");
    return "You guessed it!";
  } else if (board.length === 10) {
    console.log("You ran out of turns!");
    return "You ran out of turns! The solution was " + solution;
  } else {
    generateHint(guess);
  }
  let hint = guess + " " + generateHint(guess);
  board.push(hint);
  // should give hints
  // should update the board
};

const getPrompt = () => {
  rl.question("guess: ", (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
};

// Tests

if (typeof describe === "function") {
  solution = "abcd";
  describe("#mastermind()", () => {
    it("should register a guess and generate hints", () => {
      mastermind("aabb");
      assert.equal(board.length, 1);
    });
    it("should be able to detect a win", () => {
      assert.equal(mastermind(solution), "You guessed it!");
    });
  });

  describe("#generateHint()", () => {
    it("should generate hints", () => {
      assert.equal(generateHint("abdc"), "2-2");
    });
    it("should generate hints if solution has duplicates", () => {
      assert.equal(generateHint("aabb"), "1-1");
    });
  });
} else {
  generateSolution();
  getPrompt();
}
