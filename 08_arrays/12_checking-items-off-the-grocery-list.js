let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// while (groceryList.length) {
//   console.log(groceryList.shift());
// }

let item;
while (item = groceryList.shift()) {
  console.log(item);
}

console.log(groceryList); // []