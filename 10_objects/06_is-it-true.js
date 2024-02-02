// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// "It's true!" is never logged to the console because the if condition never evaluates to a truty value.
// Object properties are strings. We are using a strict equality operator in the condition. Both the type and the value must match
// in order for the condition to be true.