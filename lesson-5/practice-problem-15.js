/* Given the following data structure, write some code
 * to return an array which contains only the objects
 * where all the numbers are even.
 */

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] }
];

let allEven = arr.filter(obj => {
  let oddNums = [];

  for (let key in obj) {
    let innerArr = obj[key];

    innerArr.forEach(num => {
      if (num % 2 !== 0) {
        oddNums.push(num);
      }
    });
  }
  return oddNums.length === 0;
});

console.log(allEven);

/* Alternative (better) solution from Launch School, using every():

arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ] */