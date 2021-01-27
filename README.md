# JS211_CurrentDateTimeProject[![CircleCI](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages.svg?style=svg)](https://circleci.com/gh/AustinCodingAcademy/javascript-workbook/tree/gh-pages)

![](http://en.gravatar.com/userimage/107370100/a08594145564536138dfaaf072c7b241.png)

# Austin Coding Academy

## JavaScript 211 Project: MasterMind

### Today's Checklist

1. Fork and clone [MasterMind Repo](https://github.com/AustinCodingAcademy/JS211_MasterMind)
1. Ensure you have installed all dependencies/packages: `npm i`
1. Look at the Unit Test, see what is being called, passed as input arguments, and what the expected results are.
1. Ensure you know how to run the unit test:
    * `npm test main.js`
1. Follow the Specs below
1. Use a whiteboard to work out a solution to building the MasterMind program
1. Translate the broad ideas to pseudo code
1. Convert the pseudo code to real JavaScript Code
1. Type into your text editor the JavaScript code you've come up with one step at a time
1. Work through your bugs.
1. Use `node main.js` to run the game
1. Achieve green checks for each of your unit tests.

### Spec(ification)s

1. Create a new branch called "masterMind"
1. **Spec 0 - Define a test solution:** Helpful suggestion: while developing you can set a default solution for you to test against. At the top of `mastermind()`, simply set `const solution = 'abcd';` as a global variable.
1. **Spec 1 - Detect a correct solution:** In `mastermind()`, if the `guess` you passed in equals the `solution`, `return` `'You guessed it!';`.
1. **Spec 2 - Generate a hint:** `generateHint()` should take one argument, `guess`.
1. **Spec 2.1 - Split up the** `solution` **and** `guess`**:** In `generateHint()`, create variables `solutionArray` and `guessArray` that each split up passed in arguments, [`.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)ting on `''` (empty string).
1. **Spec 2.2 - Determine correct "letter-locations":** Create a variable `correctLetterLocations` and set it to `0`. This variable will record how many correct "letter-locations" were guessed. For instance, a guess of `aabc` against a solution of `deba` would yield one correct "letter-location" (`b`). In a `for` loop, iterate over the `solutionArray`, comparing each index of `solutionArray` against the same index of `guessArray`. If the item matches, increment `correctLetterLocations`, and set that index in `solutionArray` to `null`.
1. **Spec 2.3 - Determine correct "letters":** Now that we have `null`ed the already counted `correctLetterLocations`, we can see if the `guessArray` contains any `correctLetters` that were not in the correct location. Set a variable `correctLetters` equal to `0`, and in a `for` loop, again iterate over the `solutionArray`. Using [`.indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), determine if the item at the current index in `guessArray` appears inside of `solutionArray`. Save that index in a variable called `targetIndex`. Now, `if` `targetIndex` is greater than `-1`, increment `correctLetters` and set the item in `solutionArray` at that index equal to `null`.
1. **Spec 2.4 -** `return` **hint string:** Optionally, you can use the [`colors`](https://www.npmjs.com/package/colors) package, `return` a string that prints out the hints you generated, with `correctLetterLocations` being red, `correctLetters` being white, and separated by a hyphen. (NOTE: If you choose to use this color package, only `console.log` the result. If you `return` the result your program will fail the tests.)
1. **Spec 3 - Add guess and hint to the board:** Define a variable called `hint` that collects the returned value of `generateHint(guess)`. `.push` the `guess` and the `hint` (as a combined string) into the `board`.
1. **Spec 4 - End the game:** After 10 incorrect guesses, if the `board` `length` equals `10`, `return` `'You ran out of turns! The solution was '` and the `solution`. Otherwise, `return` `'Guess again.'`.

### Hints

1. Run your unit tests first!!
1. Use [repl.it](https://www.repl.it) to write the solution code first. (it's a faster environment vs using the `node main.js` command over and over again.)
1. Read the comments in `main.js`
1. Use the [JS Docs at W3S](https://www.w3schools.com/jsref/jsref_split.asp)
1. Push yourself further.
1. Look at your hints!
1. **Clone, setup, testing, and running instructions for all projects is below**

******

## Cloning Your Project

1. Click the 'Fork' button (choose your account if prompted).
1. Copy HTTPS URL from your forked repository
1. In your terminal/gitBash/CommandPrompt navigate (using `cd`) into a directory where you want to start keeping your repositories. (`/jsDevFolder`)
1. Clone your new repository by typing `git clone <forked clone URL>` (the HTTPS
URL you copied above)
  ![Forking a repository](https://docs.google.com/drawings/d/1tYsLHaLo8JRdp0xC1EZrAo0o9Wvv4S5AD937cokVOBk/pub?w=960&h=720)
1. Now go into the new directory by using `cd project-repo`

1. Add the base repository as an upstream
    `git remote add upstream https://github.com/AustinCodingAcademy/<PROJECT-REPO>.git`

1. Check the configuration of your remotes with `git remote -v`, it should look
very similar to this (except it'll be YOUR username)

```bash
$ git remote -v

origin  git@github.com:username/javascript-workbook.git (fetch)
origin  git@github.com:username/javascript-workbook.git (push)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (fetch)
upstream    git@github.com:AustinCodingAcademy/javascript-workbook.git (push)
```

### Setup

1. From your project directory, run `npm i` to tell NPM to install all the
node modules we use in this class (see `package.json`)
1. Use your textEditor (VS Code) to change your files.
1. When you're finished `git status`, stage your file `git add .`, commit your changes `git commit -m "functions working"`, and push to
GitHub `git push`
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```

1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.

#### Get latest workbook updates

1. To get the latest code/homework/test updates, be sure to have a "clean
working directory" by committing or removing all of your changes. You check for
a "clean working environment" by running `git status` and making sure no files
show up.

1. Run `git pull upstream gh-pages`

![Contributing workflow](https://docs.google.com/drawings/d/1WeKQxOHgPKfwjy_eKtlJO62Fu4XTCWFeqkAh1oIqICM/pub?w=960&h=720)

### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure your code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
