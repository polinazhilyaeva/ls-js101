/* Given the following data structure, sort the array
 * so that the sub-arrays are ordered based on the sum
 * of the odd numbers that they contain.
 *
 * Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
 * [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
 */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let sumOddA = a.reduce((sum, number) => {
    if (number % 2 === 1) {
      return sum + number;
    }

    return sum;
  }, 0);

  let sumOddB = b.reduce((sum, number) => {
    if (number % 2 === 1) {
      return sum + number;
    }

    return sum;
  }, 0);

  return sumOddA - sumOddB;
});

console.log(arr);

/* Alternative solution from Launch School:

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
}); */