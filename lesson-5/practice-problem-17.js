/* A UUID is a type of identifier often used to uniquely identify items,
 * even when some of those items were created on a different server
 * or by a different application.
 * That is, without any synchronization, two or more computer systems
 * can create new items and label them with a UUID with no significant risk
 * of stepping on each other's toes.
 * It accomplishes this feat through massive randomization.
 * The number of possible UUID values is approximately 3.4 X 10E38,
 * which is a huge number.
 * The chance of a conflict is vanishingly small with such a large number
 * of possible values.

 * Each UUID consists of 32 hexadecimal characters
 * (the digits 0-9 and the letters a-f) represented as a string.
 * The value is typically broken into 5 sections in an 8-4-4-4-12 pattern,
 * e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
 *
 * Write a function that takes no arguments and returns a string
 * that contains a UUID.
 */

/*
Input: Nothing
Output: a string of 32 hexadecimal characters
        broken into 5 sections in an 8-4-4-4-12 pattern

        Example: 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

Algorithm:

1. Create a string of digits 0-9 and small a-f letters.
2. Create an empty string for UUID.
3. Repeat 32 times (where 32 is number if characters in UUID):
   3.1. Generate a random index from 0 to 16
        (where 16 is a number of digits 0-9 plus letters a-f).
   3.2. Get a character at this index from the string created at step 1.
   3.3. Add this character to the string created at step 2.
   3.4. Add '-' symbol at the appropriate positions of the string
        to follow the 8-4-4-4-12 pattern.
4. Return resulting UUID string.
*/

function generateUUID() {
  const HEXADECIMAL_CHARS = '0123456789abcdef';
  const NUM_OF_HEX_CHARS = HEXADECIMAL_CHARS.length;
  const UUID_LENGTH = 32;
  const SECTIONS_END_INDEXES = [7, 11, 15, 19];

  let UUID = '';

  for (let iterator = 0; iterator < UUID_LENGTH; iterator += 1) {
    let randomIndex = Math.floor(Math.random() * NUM_OF_HEX_CHARS);
    let randomChar = HEXADECIMAL_CHARS.charAt(randomIndex);

    UUID += randomChar;

    if (SECTIONS_END_INDEXES.includes(iterator)) {
      UUID += '-';
    }
  }

  return UUID;
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());