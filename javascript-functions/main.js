function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFisrtName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}
var minutesToSeconds = convertMinutesToSeconds(5);
var greeting = greet('Jumanah');
var area = getArea(17, 42);
var firstName = getFisrtName({ firstName: 'Jumanah', lastName: 'Almajnouni' });
var lastElement = getLastElement(['apple', 'banana', 'orange', 'berries']);
console.log('The value of minutesToSeconds is: ', minutesToSeconds);
console.log('The value of greeting is: ', greeting);
console.log('The value of area is: ', area);
console.log('The value of firstName is: ', firstName);
console.log('The value of lastElement is: ', lastElement);
