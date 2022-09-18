/* Given this previously seen family object,
 * print the name, age, and gender of each family member.
 * Each output line should follow this pattern:
 *
 * (Name) is a (age)-year-old (male or female).
 */

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.keys(munsters);

munstersArray.forEach(name => {
  console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}`);
});

/*
Alternative solution using replace a template string:

let template = "(Name) is a (age)-year-old (male or female)";

munstersArray.forEach(name => {
  console.log(
    template.replace('(Name)', name)
      .replace('(age)', munsters[name].age)
      .replace('(male or female)', munsters[name].gender)
  );
});
*/