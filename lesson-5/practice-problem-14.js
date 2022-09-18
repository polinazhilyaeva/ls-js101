/* Given the following data structure write some code
 * to return an array containing the colors of the fruits
 * and the sizes of the vegetables.
 * The sizes should be uppercase, and the colors should be capitalized.
 *
 * The return value should look like this:
 * [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
 */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let objValues = Object.values(obj);

let resultArr = objValues.map(object => {
  if (object.type === 'fruit') {
    let colors = object.colors.map(
      color => color[0].toUpperCase() + color.slice(1)
    );
    return colors;
  }

  return object.size.toUpperCase();
});

console.log(resultArr);

/* PEDAC:
 *
 * Input: OBJECT where each value is also an object.
          Each inner object contains strings and arrays of strings as its values
 *
 * Output: ARRAY which contains arrays of strings and strings as elements
 *
 * Algorithm:
 *
 * 1. Create an empty result array
 * 2. Iterate over each inner object of obj.
 *    2.1. If type is 'fruit'
 *         2.1.1. Capitalize each color in the 'colors' array
 *         2.1.2. Add the 'colors' array to the result array
 *    2.2. If type is 'vegetable'
 *         2.2.1. Make the 'size' string uppercase
 *         2.2.2. Add the 'size' string to the result array
 * 3. Return/print result array
*/