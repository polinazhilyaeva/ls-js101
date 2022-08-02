const readLine = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES.welcome);

let repeat;

do {
  prompt(MESSAGES.askFirstNumber);
  let firstNumber = readLine.question();

  while (invalidNumber(firstNumber)) {
    prompt(MESSAGES.invalidNumber);
    firstNumber = readLine.question();
  }

  prompt(MESSAGES.askSecondNumber);
  let secondNumber = readLine.question();

  while (invalidNumber(secondNumber)) {
    prompt(MESSAGES.invalidNumber);
    secondNumber = readLine.question();
  }

  prompt(MESSAGES.chooseOperation);
  let operation = readLine.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOperation);
    operation = readLine.question();
  }

  let result;

  switch (operation) {
    case '1':
      result = Number(firstNumber) + Number(secondNumber);
      prompt(`${firstNumber} + ${secondNumber} = ${result}`);
      break;
    case '2':
      result = Number(firstNumber) - Number(secondNumber);
      prompt(`${firstNumber} - ${secondNumber} = ${result}`);
      break;
    case '3':
      result = Number(firstNumber) * Number(secondNumber);
      prompt(`${firstNumber} * ${secondNumber} = ${result}`);
      break;
    case '4':
      result = Number(firstNumber) / Number(secondNumber);
      prompt(`${firstNumber} / ${secondNumber} = ${result}`);
      break;
  }

  prompt(MESSAGES.askAnotherCalculation);
  let answer = readLine.question().toLowerCase()[0];
  repeat = answer === 'y';

} while (repeat);