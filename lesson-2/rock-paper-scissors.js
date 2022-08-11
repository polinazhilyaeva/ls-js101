const readLine = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

function readUserInput() {
  return readLine.question('---> ');
}

function playerOneWins(playerOneChoice, playerTwoChoice) {
  return WINNING_COMBINATIONS[playerOneChoice].includes(playerTwoChoice);
}

function getChoiceFromPlayer() {
  console.log(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let playerChoice = readUserInput();

  while (!VALID_CHOICES.includes(playerChoice)) {
    console.log("That's not a valid choice");
    playerChoice = readUserInput();
  }

  return playerChoice;
}

function getChoiceFromComputer() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  return computerChoice;
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
  let answer = readUserInput().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    console.log('Please enter "y" or "n".');
    answer = readUserInput().toLowerCase();
  }

  return answer[0] === 'y';
}

while (true) {
  let playerChoice = getChoiceFromPlayer();
  let computerChoice = getChoiceFromComputer();

  displayWinner(playerChoice, computerChoice);

  if (!userWantsToRepeat()) break;
}