/*
** Pick out the minimum age from our current Munster family object
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);

let minAge = agesArray.reduce((previousAge, currentAge) => {
  if (currentAge < previousAge) {
    return currentAge;
  }

  return previousAge;
});

console.log(minAge);

/*
** Alternative solution (from LaunchSchool), using spread operator:
**
** let agesArr = Object.values(ages);
** Math.min(...agesArr); // => 10
*/