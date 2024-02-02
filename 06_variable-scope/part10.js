// What will the following code log to the console and why? Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// {firstName: 'Jane', lastName: 'Doe'}
// Variable a is declared with the const keyword in the outer scope.
// Although variables declared usin const cannot be reassigned, they can be mutated.
// Since a variable references an object, it is possible to mutate its values from the
// myFunction body. After invoking myFunction(), variable a is mutated.