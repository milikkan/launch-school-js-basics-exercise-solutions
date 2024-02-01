let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  let city = cities[index];
  if (city === null) {
    continue;
  }
  console.log(city.length);
}