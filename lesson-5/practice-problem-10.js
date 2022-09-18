/* Perform the same transformation of sorting the subarrays
 * we did in the previous exercise with one difference;
 * sort the elements in descending order.
 */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArr => {
  return subArr.slice()
    .sort((a, b) => {
      if (b < a) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    });
});

console.log(sortedArr);