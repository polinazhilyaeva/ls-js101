const readLine = require('readline-sync');
const VALID_PLAY_AGAIN_ANSWERS = ['y', 'yes', 'n', 'no'];

const OPTIONS = {
  rock: {
    shortName: 'r',
    winningCombos: ['scissors', 'lizard']
  },
  paper: {
    shortName: 'p',
    winningCombos: ['rock', 'spock']
  },
  scissors: {
    shortName: 'sc',
    winningCombos: ['paper', 'lizard']
  },
  lizard: {
    shortName: 'l',
    winningCombos: ['spock', 'paper']
  },
  spock: {
    shortName: 'sp',
    winningCombos: ['scissors', 'rock']
  }
};

const VALID_INPUTS = getValidInputs();
const COMPUTER_OPTIONS = Object.keys(OPTIONS);
const WINNING_SCORE = 3;

const RULES_DESCRIPTION =
`You'll play several rounds with the computer.
The winner of the match is the one who wins ${WINNING_SCORE} rounds first.\n
*** Remember: ***
Scissors cuts Paper and decapitates Lizard
Paper covers Rock and disproves Spock
Rock crushes Lizard and crushes Scissors
Lizard poisons Spock and eats Paper
Spock smashes Scissors and vaporizes Rock\n`;

let roundsCount = 0;
let playerScore = 0;
let computerScore = 0;

// Functions declaration

function getValidInputs() {
  let validInputs = [];

  for (let key in OPTIONS) {
    let option = OPTIONS[key];
    validInputs.push(key, option.shortName);
  }

  return validInputs;
}

function readPlayerInput() {
  return readLine.question('---> ');
}

function getPlayerChoiceFromInput(playerInput) {
  for (let key in OPTIONS) {
    let option = OPTIONS[key];

    if (playerInput === option.shortName) {
      return key;
    }
  }

  return playerInput;
}

function printAvailableOptions() {
  for (let key in OPTIONS) {
    let option = OPTIONS[key];

    console.log(`Type '${option.shortName}' or '${key}' to choose ${key}`);
  }
}

function getChoiceFromPlayer() {
  printAvailableOptions();

  let playerInput = readPlayerInput();

  while (!VALID_INPUTS.includes(playerInput)) {
    console.log(`(!) '${playerInput}' is not a valid choice. Please try again:\n`);
    printAvailableOptions();

    playerInput = readPlayerInput();
  }

  let playerChoice = getPlayerChoiceFromInput(playerInput.toLowerCase());

  return playerChoice;
}

function getChoiceFromComputer() {
  let randomIndex = Math.floor(Math.random() * COMPUTER_OPTIONS.length);
  let computerChoice = COMPUTER_OPTIONS[randomIndex];

  return computerChoice;
}

function displayWinner(playerWins, computerWins, gameType) {
  if (playerWins) {
    console.log(`You win this ${gameType}!`);
  } else if (computerWins) {
    console.log(`Computer wins this ${gameType}!`);
  } else {
    console.log(`It's a tie in this ${gameType}.`);
  }
}

function playerOneWins(playerOneChoice, playerTwoChoice) {
  return OPTIONS[playerOneChoice].winningCombos.includes(playerTwoChoice);
}

function displayScore(playerScore, computerScore) {
  console.log(`\nCurrent score: \nYou ${playerScore} : ${computerScore} Computer\n`);
}

function playRound() {
  roundsCount += 1;
  console.log(`*** Round #${roundsCount} - Make your choice!\n`);

  let playerChoice = getChoiceFromPlayer();
  let computerChoice = getChoiceFromComputer();

  console.log(`\nYou chose ${playerChoice}, computer chose ${computerChoice}`);

  let playerWonRound = playerOneWins(playerChoice, computerChoice);
  let computerWonRound = playerOneWins(computerChoice, playerChoice);

  if (playerWonRound) {
    playerScore += 1;
  } else if (computerWonRound) {
    computerScore += 1;
  }

  displayWinner(playerWonRound, computerWonRound, 'round');
  displayScore(playerScore, computerScore);
}

function resetMatchStatus() {
  roundsCount = 0;
  playerScore = 0;
  computerScore = 0;
}

function playMatch() {
  let playerWonMatch;
  let computerWonMatch;

  do {
    playRound();
    playerWonMatch = playerScore === WINNING_SCORE;
    computerWonMatch = computerScore === WINNING_SCORE;
  } while (!playerWonMatch && !computerWonMatch);

  displayWinner(playerWonMatch, computerWonMatch, 'match');
  resetMatchStatus();
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

function printGreetingsAndRules() {
  console.clear();
  console.log('Hi there! Let\'s play Rock-Paper-Scissors (+ Spock and Lizard)!');
  console.log(RULES_DESCRIPTION);
}

function sayBye() {
  console.log('Bye! See you next time!');
}

// Start of the main program

printGreetingsAndRules();

do {
  playMatch();
} while (userWantsToRepeat());

sayBye();