/* Ask the user for the first number.
 * Ask the user for the second number.
 * Ask the user for an operation to perform.
 * Perform the operation on the two numbers.
 * Print the result to the terminal.
 */

const readLine = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What is the first number?');
let firstNumber = Number(readLine.question());

console.log('What is the second number?');
let secondNumber = Number(readLine.question());

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readLine.question();

let result;

switch (operation) {
  case '1':
    result = firstNumber + secondNumber;
    console.log(`${firstNumber} + ${secondNumber} = ${result}`);
    break;
  case '2':
    result = firstNumber - secondNumber;
    console.log(`${firstNumber} - ${secondNumber} = ${result}`);
    break;
  case '3':
    result = firstNumber * secondNumber;
    console.log(`${firstNumber} * ${secondNumber} = ${result}`);
    break;
  case '4':
    result = firstNumber / secondNumber;
    console.log(`${firstNumber} / ${secondNumber} = ${result}`);
    break;
}