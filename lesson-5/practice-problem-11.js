/* Given the following data structure, use the map method
 * to return a new array identical in structure to the original but,
 * with each number incremented by 1. Do not modify the original data structure.
 */

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let incrementedArr = arr.map(obj => {
  let incrementedObj = Object.assign({}, obj);

  for (let key in incrementedObj) {
    incrementedObj[key] += 1;
  }

  return incrementedObj;
});

console.log(arr);
console.log(incrementedArr);

/* Alternative solution from Launch School:

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ] */