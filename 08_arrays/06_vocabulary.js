let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (let i = 0; i < vocabulary.length; i++) {
  let innerArray = vocabulary[i];
  for (let j = 0; j < innerArray.length; j++) {
    console.log(innerArray[j]);
  }
}