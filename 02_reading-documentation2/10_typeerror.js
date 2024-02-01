// You'll see that it raises an error:
// TypeError: tweet.length is not a function

/* 
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

 */

// Check the documentation of both TypeError and length, in order to find out what causes the error.

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) { // length is a property, there is no length() method of the string
  console.log('Tweet is too long!');
}
