/* Given the following data structure, return a new array
 * with the same structure, but with the values in each subarray ordered --
 * alphabetically or numerically as appropriate -- in ascending order.
 */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArr => {
  return subArr.slice()
    .sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
});

console.log(sortedArr);

/* Alternative solution from Launch School:

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ] */