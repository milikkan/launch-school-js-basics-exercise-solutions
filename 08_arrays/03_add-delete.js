let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

console.log(energy); // original array
energy.splice(0, 1);
energy.push('geothermal'); 
console.log(energy); // mutated array