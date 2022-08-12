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

function getPlayerChoiceFromInput(playerInput) {
  for (let option in OPTIONS) {
    let optionShortName = OPTIONS[option].shortName;
    let optionFullName = OPTIONS[option].fullName;

    if (playerInput === optionShortName) {
      return optionFullName;
    }
  }

  return playerInput;
}

function getChoiceFromPlayer(options) {
  const validInputs = getValidInputs(options);

  for (let option in options) {
    let optionShortName = options[option].shortName;
    let optionFullName = options[option].fullName;
    console.log(`Type '${optionShortName}' or '${optionFullName}' to choose ${optionFullName}`);
  }

  let playerInput = readPlayerInput();

  while (!validInputs.includes(playerInput)) {
    console.log('That\'s not a valid choice.');
    playerInput = readPlayerInput();
  }

  let playerChoice = getPlayerChoiceFromInput(playerInput);

  return playerChoice;
}

function getChoiceFromComputer(options) {
  const validChoices = Object.keys(options);
  let randomIndex = Math.floor(Math.random() * validChoices.length);
  let computerChoice = validChoices[randomIndex];

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

do {
  let playerChoice = getChoiceFromPlayer(OPTIONS);
  let computerChoice = getChoiceFromComputer(OPTIONS);

  displayWinner(playerChoice, computerChoice);
} while (userWantsToRepeat());