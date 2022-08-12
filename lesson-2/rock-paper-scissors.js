const readLine = require('readline-sync');
const VALID_PLAY_AGAIN_ANSWERS = ['y', 'yes', 'n', 'no'];

const OPTIONS = {
  rock: {
    fullName: 'rock',
    shortName: 'r'
  },
  paper: {
    fullName: 'paper',
    shortName: 'p'
  },
  scissors: {
    fullName: 'scissors',
    shortName: 'sc'
  },
  lizard: {
    fullName: 'lizard',
    shortName: 'l'
  },
  spock: {
    fullName: 'spock',
    shortName: 'sp'
  }
};

const COMPUTER_OPTIONS = Object.keys(OPTIONS);

const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

// Functions declaration

function getValidInputs(options) {
  let validInputs = [];

  for (let key in options) {
    let option = options[key];
    let optionNames = Object.values(option);
    validInputs.push(optionNames);
  }

  return validInputs.flat();
}

function readPlayerInput() {
  return readLine.question('---> ');
}

function getPlayerChoiceFromInput(playerInput, options) {
  for (let key in options) {
    let option = options[key];

    if (playerInput === option.shortName) {
      return option.fullName;
    }
  }

  return playerInput;
}

function printAvailableOptions(options) {
  for (let key in options) {
    let option = options[key];

    console.log(`Type '${option.shortName}' or '${option.fullName}' to choose ${option.fullName}`);
  }
}

function getChoiceFromPlayer(options) {
  const validInputs = getValidInputs(options);

  printAvailableOptions(options);

  let playerInput = readPlayerInput();

  while (!validInputs.includes(playerInput)) {
    console.log(`(!) '${playerInput}' is not a valid choice. Please try again:\n`);
    printAvailableOptions(options);

    playerInput = readPlayerInput();
  }

  let playerChoice = getPlayerChoiceFromInput(playerInput, options);

  return playerChoice;
}

function getChoiceFromComputer(computerOptions) {
  let randomIndex = Math.floor(Math.random() * computerOptions.length);
  let computerChoice = computerOptions[randomIndex];

  return computerChoice;
}

function playerOneWins(playerOneChoice, playerTwoChoice) {
  return WINNING_COMBINATIONS[playerOneChoice].includes(playerTwoChoice);
}

function displayWinner(playerChoice, computerChoice) {
  console.log(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  if (playerOneWins(playerChoice, computerChoice)) {
    console.log('You win!');
  } else if (playerOneWins(computerChoice, playerChoice)) {
    console.log('Computer wins!');
  } else {
    console.log('It\'s a tie');
  }
}

function userWantsToRepeat() {
  console.log('Do you want to play again (y/n)?');

  let answer = readPlayerInput().toLowerCase();

  while (!VALID_PLAY_AGAIN_ANSWERS.includes(answer)) {
    console.log('Please enter "y" ("yes") or "n" ("no").');
    answer = readPlayerInput().toLowerCase();
  }

  return answer[0] === 'y';
}

// Start of the main program

console.clear();
console.log('Hi there! Let\'s play Rock-Paper-Scissors (+ Spock and Lizard)!\n');

do {
  let playerChoice = getChoiceFromPlayer(OPTIONS);
  let computerChoice = getChoiceFromComputer(COMPUTER_OPTIONS);

  displayWinner(playerChoice, computerChoice);
} while (userWantsToRepeat());

console.log('Bye! See you next time!');