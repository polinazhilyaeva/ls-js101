const readLine = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function prompt(message) {
  console.log(`=> ${message}`);
}

function localizedPrompt(message) {
  console.log(`=> ${MESSAGES[LANGUAGE][message]}`);
}

function isInvalidNumber(input) {
  return input.trimStart() === '' || Number.isNaN(Number(input));
}

function getNumberFromUser(prompt) {
  localizedPrompt(prompt);
  let firstInput = readLine.question();

  while (isInvalidNumber(firstInput)) {
    localizedPrompt('invalidNumber');
    firstInput = readLine.question();
  }

  return Number(firstInput);
}

function getOperationFromUser() {
  localizedPrompt('chooseOperation');
  let operation = readLine.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    localizedPrompt('invalidOperation');
    operation = readLine.question();
  }

  return operation;
}

function calculate(number1, number2, action) {
  localizedPrompt('result');

  switch (action) {
    case '1':
      prompt(`${number1} + ${number2} = ${number1 + number2}`);
      break;
    case '2':
      prompt(`${number1} - ${number2} = ${number1 - number2}`);
      break;
    case '3':
      prompt(`${number1} * ${number2} = ${number1 * number2}`);
      break;
    case '4':
      prompt(`${number1} / ${number2} = ${number1 / number2}`);
      break;
  }
}

// Start of the main program

localizedPrompt('welcome');

let repeat;

do {
  let firstNumber = getNumberFromUser('askFirstNumber');
  let secondNumber = getNumberFromUser('askSecondNumber');
  let operation = getOperationFromUser();

  calculate(firstNumber, secondNumber, operation);

  localizedPrompt('askAnotherCalculation');
  let answer = readLine.question().toLowerCase()[0];
  repeat = answer === 'y';

} while (repeat);

localizedPrompt('goodBye');