/* Given the following data structure, write some code
 * that defines an object where the key is the first item in each subarray,
 * and the value is the second.
 *
 * Expected value of object:
 * { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
 */

let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];
let obj = {};

arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
});

console.log(obj);

/* Alternative (recent JS versions) solution from LS:

obj = Object.fromEntries(arr);

*/
