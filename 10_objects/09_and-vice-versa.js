// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};
// for (let pair of nestedArray) {
//   obj[pair[0]] = pair[1];
// }

// alternative method:
obj = Object.fromEntries(nestedArray); // fromEntries method is added in ES2019

console.log(obj);

