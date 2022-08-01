// Function Declaration/Function Statement
// Hoisted to top, can be declared anywhere in the file
/*function startGame() {
  console.log('Game is Loading ....');
}*/

// Function Expression
// Hoisted to the top but not initialized/defined. cant be declared anywhere in the file.
/*const startAgain = function () {
  console.log('ReLoading');
};*/

/* const person = {
  greet: function greet () {
    console.log('Hello CK');
  }
}*/

/*startGame();
console.log(typeof startGame);
console.dir(startGame);
// startGameBtn.addEventListener('click', startGame);
startGameBtn.addEventListener('click', startAgain);
// startGameBtn.addEventListener('click', person.greet);*/

// -----------------------------FUNCTIONS

// 1) Default syntax:
const add = (a, b) => {
    const result = a + b;
    return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
};


// 2) Shorter parameter syntax, if exactly one parameter is received:

const log = message => {
    console.log(message); // could also return something of course - this example just doesn't
};

// 3) Empty parameter parentheses if NO arguments are received:

const greet = () => {
    console.log('Hi there!');
};


// 4) Shorter function body, if exactly one expression is used:

const sum = (a, b) => a + b;

// 5) Function returns an object (with shortened syntax as shown in 4)):

const loadPerson = pName => ({name: pName });
// ----------------------------------------
// Rest operator . It has to be the last argument in the list.c
// You can have only yone Rest
const sumUp = (...numbers) =>{
  let sum = 0;
  for(const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(sumUp(1,3,4,6));

//-----------------------------------------
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DRAW = 'DRAW';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_PLAYER_WINS = 'PLAER_WINS';
const RESULT_PC_WINS = 'PC WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} || ${SCISSORS}`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_PC_WINS;

/*if (cChoice === pChoice) {
    return DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    RESULT_PC_WINS;
  }*/

const getComputerChoice = () => {
  const randomValue = Math.floor(Math.random()) * 10;
  console.log(randomValue);
  if (randomValue < 3) {
    return ROCK;
  } else if (randomValue < 6) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    console.log('Cant start another game');
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting ....');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, PC picked ${computerChoice}, therefore you `;
  if(winner === DRAW) {
    message =  message + 'had a draw';
  }else if(winner === RESULT_PLAYER_WINS) {
    message =  message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert (message);
  gameIsRunning = false;
});
