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

const generateHint = (guess) =>  {
  // your code here
  let hints = 0;
  let hints2 = 0;

  let guessArray = guess.split('');
  let solutionArray = solution.split('');
  
  guessArray.forEach(function(letter, i){
      if(guessArray[i] == solutionArray[i]){
      hints++; 
      guessArray[i] = 0;
      solutionArray[i] = 1;
    }
  })

  guessArray.forEach(function(guessLetter, index1){
    solutionArray.forEach(function(solutionLetter, index2){
      if(guessLetter == solutionLetter){
        hints2++;
        guessArray[index1] = 0;
        solutionArray[index2] = 1;
      }
    })
  })
  return hints + "-" + hints2
}

const mastermind = (guess) => {
  //solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  if(typeof guess !== 'string' || guess.length !== 4){
    console.log('Guess must be 4 letters long using only letters A-H'); 
    return false; 
  }

  guess = guess.toLowerCase().trim(); 
  
  if(guess == solution){
    board = [];
    console.log("You guessed it!")
    return "You guessed it!"; 
  }else if(board.length === 10){
    console.log("You lost! The solution was " + solution);
    board = [];
    generateSolution();
  }else{
    board.push(guess)
    console.log(generateHint(guess))
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
//guess must only be letters/strings from letters array and 4 letters in length, if not then log 'can only use 4 letters from range a-h
//if user inputs whitespace and uppercase letters then use trim method tolowercasw method 
//generate a solution for the user to guess 
//push each guess into the board array
//compare the board array(guess) to the solution array
//iterate over board array(guess) and compare the element at each index to that of the solution array
    //if 