const readLine = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt('What is the first number?');
let firstNumber = readLine.question();

while (invalidNumber(firstNumber)) {
  prompt("Hmm... that doesn't look like a valid number. Please try once more.");
  firstNumber = readLine.question();
}

prompt('What is the second number?');
let secondNumber = readLine.question();

while (invalidNumber(secondNumber)) {
  prompt("Hmm... that doesn't look like a valid number. Please try once more.");
  secondNumber = readLine.question();
}

prompt('What operation would you like to perform?\n   1 - Add\n   2 - Subtract\n   3 - Multiply\n   4 - Divide');
let operation = readLine.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('You must type 1, 2, 3 or 4');
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