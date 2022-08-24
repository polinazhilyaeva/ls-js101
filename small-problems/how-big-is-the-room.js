/*
 * Build a program that asks the user to enter the length and width
 * of a room in meters, and then logs the area of the room to the console
 * in both square meters and square feet.

 * Note: 1 square meter == 10.7639 square feet

 * Do not worry about validating the input at this time.
 * Use the readlineSync.prompt method to collect user input.

 * Example:
 * Enter the length of the room in meters:
 * 10
 * Enter the width of the room in meters:
 * 7
 * The area of the room is 70.00 square meters (753.47 square feet).
 *
 *** Further Exploration ***
 *
 * Modify the program so that it asks the user for the input type
 * (meters or feet).
 * Compute for the area accordingly, and log it and its conversion
 * in parentheses.
*/

const readLine = require('readline-sync');
const SQUARE_FEET_IN_SQUARE_METER = 10.7639;

console.log('Choose the input type:\n1 - meters\n2 - feet');
let userInputTypeChoice = readLine.prompt();

while (!['1', '2'].includes(userInputTypeChoice)) {
  console.log('Type 1 or 2.');
  userInputTypeChoice = readLine.prompt();
}

let inputType = (userInputTypeChoice === '1') ? 'meters' : 'feet';

console.log(`Enter the length of the room in ${inputType}: `);
let length = Number(readLine.prompt());

console.log(`Enter the width of the room in ${inputType}: `);
let width = Number(readLine.prompt());

let areaMeters;
let areaFeet;

if (inputType === 'meters') {
  areaMeters = length * width;
  areaFeet = areaMeters * SQUARE_FEET_IN_SQUARE_METER;
} else {
  areaFeet = length * width;
  areaMeters = areaFeet / SQUARE_FEET_IN_SQUARE_METER;
}

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);