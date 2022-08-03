/* Log all odd numbers from 1 to 99, inclusive, to the console,
 * with each number on a separate line.
 */

const readLine = require('readline-sync');

function logOddNumbers(start, end) {
  let oddNumber;

  if (start % 2 !== 0) {
    oddNumber = start;
  } else {
    oddNumber = start + 1;
  }

  while (oddNumber <= end) {
    console.log(oddNumber);
    oddNumber += 2;
  }
}

console.log('Please enter the start number:');
let startNumber = Number(readLine.question());

console.log('Please enter the end number:');
let endNumber = Number(readLine.question());

logOddNumbers(startNumber, endNumber);