const readLine = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_COMBINATIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerOneWins(playerOneChoice, playerTwoChoice) {
  return WINNING_COMBINATIONS[playerOneChoice].includes(playerTwoChoice);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}`);

  if (playerOneWins(playerChoice, computerChoice)) {
    prompt('You win!');
  } else if (playerOneWins(computerChoice, playerChoice)) {
    prompt('Computer wins!');
  } else {
    prompt('It\'s a tie');
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readLine.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readLine.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readLine.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readLine.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}