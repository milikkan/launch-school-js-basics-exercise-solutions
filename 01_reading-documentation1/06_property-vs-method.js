// What are the return values of the statements on lines 5 to 7? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

console.log(trees[trees.length - 1]); // 'palm tree'
trees.pop(); // 'palm tree'
console.log(trees[trees.length - 1]); // 'sequoia'