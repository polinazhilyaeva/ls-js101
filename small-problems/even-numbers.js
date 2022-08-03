/* Log all even numbers from 1 to 99, inclusive, to the console,
 * with each number on a separate line.
 */

const readLine = require('readline-sync');

function logEvenNumbers(start, end) {
  let evenNumber;

  if (start % 2 === 0) {
    evenNumber = start;
  } else {
    evenNumber = start + 1;
  }

  while (evenNumber <= end) {
    console.log(evenNumber);
    evenNumber += 2;
  }
}

let startNumber = Number(readLine.question('Please enter the start number: '));
let endNumber = Number(readLine.question('Please enter the end number: '));

logEvenNumbers(startNumber, endNumber);