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

function displayWinner(playerWins, computerWins, gameType) {
  if (playerWins) {
    console.log(`You win in this ${gameType}!`);
  } else if (computerWins) {
    console.log(`Computer wins in this ${gameType}!`);
  } else {
    console.log(`It's a tie in this ${gameType}.`);
  }
}

function playerOneWins(playerOneChoice, playerTwoChoice) {
  return WINNING_COMBINATIONS[playerOneChoice].includes(playerTwoChoice);
}

function displayRoundWinner(playerChoice, computerChoice) {
  let playerWins = playerOneWins(playerChoice, computerChoice);
  let computerWins = playerOneWins(computerChoice, playerChoice);

  console.log(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  displayWinner(playerWins, computerWins, 'round');
}

function displayMatchWinner(playerScore, computerScore) {
  let playerWins = playerScore > computerScore;
  let computerWins = playerScore < computerScore;

  displayWinner(playerWins, computerWins, 'match');
}

function displayScore(playerScore, computerScore) {
  console.log(`\nCurrent score:\nYou ${playerScore} : ${computerScore} Computer\n`);
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

let roundsCount = 0;
let playerScore = 0;
let computerScore = 0;

console.clear();
console.log('Hi there! Let\'s play Rock-Paper-Scissors (+ Spock and Lizard)!');
console.log('You\'ll play several rounds with the computer.\nThe winner in the match is the one who first reaches 3 round wins.\n');

do {
  do {
    roundsCount += 1;
    console.log(`Round #${roundsCount} - Make your choice!\n`);

    let playerChoice = getChoiceFromPlayer(OPTIONS);
    let computerChoice = getChoiceFromComputer(COMPUTER_OPTIONS);

    if (playerOneWins(playerChoice, computerChoice)) {
      playerScore += 1;
    } else if (playerOneWins(computerChoice, playerChoice)) {
      computerScore += 1;
    }

    displayRoundWinner(playerChoice, computerChoice);
    displayScore(playerScore, computerScore);

  } while ((playerScore < 3) && (computerScore < 3));

  displayMatchWinner(playerScore, computerScore);

  roundsCount = 0;
  playerScore = 0;
  computerScore = 0;

} while (userWantsToRepeat());

console.log('Bye! See you next time!');