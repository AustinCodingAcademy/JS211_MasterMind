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
  let guessRA = guess.split('');
  let solutionRA = solution.split('');

  let blackPeg = 0;
  let whitePeg = 0; 

  for (let i = 0; i < guessRA.length; i++) {
    if (guessRA[i] === solutionRA[i]) {
      blackPeg++;
      solutionRA[i] = '';
      guessRA[i] = ''
  }
}

for (let i = 0; i < guessRA.length; i++) {
  if (guessRA[i]) {
    let foundIndex = solutionRA.indexOf(guessRA[i]);
    if (foundIndex !== -1) {
        whitePeg++;
        solutionRA[foundIndex] = '';
  }
}
}
return `${blackPeg}-${whitePeg}`;
}

  


  
  // your code here


// solution = 'erty'

// use .map() as so: if guess elements match value and index of an element, then +1 to 'blackPeg' array.

// if guess elements match value but not index, +1 to 'grayPeg' array

// grayPeg - blackPeg = whitePeg

// hint: [(blackPeg)"-"(whitePeg)]

// *** NO this would produce '1-3'

// use .map() as so: let grayPegs = 4

// if guess element matches value and index, then +1 to 'blackPegs' and -1 to 'grayPegs'

// if guess element matches value and not index, then +1 to 'whitePegs'

// grayPeg - blackPeg = // hint:

// no, no, no. 

// newRA1 = 0. newRA2 = 4. newRA3 = 0.

// if same value&index, then newRA+1 and newRA2-1 (b1, g3, w0)

// if value&!index, then newRA3+1 and newRA2-1 (RA1=1 RA2=2 RA3=3) so white pegs = newRA2?

// solution: aabc guess: abcc (so this is 1 black because of a, 1 white because of b, 0 from 1st c (black supercedes white) and 1 black because 2nd c. so 2-1.

// my rule would produce RA1+1, RA2-1 & RA3+1, RA2-1 & RA3+1, RA1+1 = RA1=2, RA2=2, RA3=2. so again again NO.

// use filter to make array with solution elements that are same value and different index. Am I doing the filter on the solution array or on the guess? If it's on the solution, then sweep 1 would be same value and position = black+1 and same value different position = white+1. 

// rule using .map(): if guess array: if matches value & index, then +1 to blackpeg, if not then 


// ******aaaaah do not lose this!

const mastermind = (guess) => {
  if (guess === solution) {
    return 'You guessed it!'
  } else { 
    const hint = generateHint(guess);
    board.push({guess: guess, hint: hint});
    return board
}
}
//   if (guess = solution) {

//   } then 'You guessed it!'
//   generateHint



  // let guessRA = guess.split('');
  // let solutionRA = solution.split('');
  // let indexedGuess = guessRA.map((element, index) => element + index);
  // let indexedSolution = solutionRA.map((element, index) => element + index);
  // console.log(indexedGuess);
  // console.log(indexedSolution)




// const guessRA = ['a', 'b', 'c', 'd']
// const solutionRA = ['a', 'd', 'c', 'b']



// let guessRA = guess.split('');
// let solutionRA = solution.split('')











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