'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];



const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (guess, solution) =>  {
  solutionArray = [solution[0],solution[1],solution[2],solution[3]]
  guessArray = [guess[0],guess[1],guess[2],guess[3]]
  correctLetterLocations = 0
  correctLetters = 0
  


  for (let i = 0; i < solutionArray.length; i++){
    if (solutionArray[i] == guessArray[i]){
      correctLetterLocations++
      solutionArray[i] = null
    }
  }

  for (let j = 0; j < solutionArray.length; j++){
    targetIndex = solutionArray.indexOf(guessArray[j])
    if (targetIndex > -1){
      correctLetters ++
      solutionArray[targetIndex] = null
    }
  }

  console.log(correctLetterLocations + '-' + correctLetters) 
  

}

const mastermind = (guess) => {
  board.push(guess)
  if (guess == solution){
    console.log('You guessed it!')
    return('You guessed it!')
  } else {
    generateHint(guess, solution)
  }

  if (board.length == 10){
    console.log('You ran out of turns! The solution was ' + solution)
    return 'You ran out of turns! The solution was ' + solution
  } else {
    return "Guess again"
  }

}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}