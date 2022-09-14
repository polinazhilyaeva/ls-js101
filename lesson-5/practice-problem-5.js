/* Consider the following nested object.
 * Compute and display the total age of the male members of the family.
 */

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleMunsters = Object.values(munsters).filter(munster => munster.gender === 'male');
let sumAges = maleMunsters.reduce((a, b) => {
  return a + b.age;
}, 0);

console.log(sumAges);

/* Alternative solutions from Launch School:

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444

or

let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
}); */