/*
** Create an object that expresses the frequency with which
** each letter occurs in this string:
** let statement = "The Flintstones Rock";
**
** The output will look something like the following:
** { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
*/

let statement = "The Flintstones Rock";

/* Algorithm:

1. Create an empty Object to store the result
2. Iterate through every letter in the statement
  2.1. Check whether a key that equals to the current letter
       already exists in the Object
    2.1.1. If it doesn't exist - add such a key to the object
           and assign 1 as a value for this key
    2.1.2. If it exists - Increment value for the corresponding key
3. Return the result object */

let frequencies = {};

let lettersArray = statement.split('');

lettersArray.forEach(letter => {
  if (letter !== ' ') {
    if (frequencies.hasOwnProperty(letter)) {
      frequencies[letter] += 1;
    } else {
      frequencies[letter] = 1;
    }
  }
});

console.log(frequencies);