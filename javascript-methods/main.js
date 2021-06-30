var firstNum = 80;
var secondNum = 43;
var thirdNum = 7;

var maximumValue = Math.max(firstNum, secondNum, thirdNum);
console.log('The value of maximumValue is: ', maximumValue);

var heros = ['Iron Man', 'Black Widow', 'Captain America', 'Spiderman'];

var randomNumber = Math.random();
console.log('The value of randomNumber is: ', randomNumber);

randomNumber *= heros.length;
console.log('The value of randomNumber is: ', randomNumber);

var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex is: ', randomIndex);

var randomHero = heros[randomIndex];
console.log('The value of randomHero is: ', randomHero);

// ARRAY METHODS

var library = [
  {
    title: 'Little Women',
    author: 'Louisa May Alcott'
  },
  {
    title: 'The Invisible Life of Addie Larue',
    author: 'V.E. Schwab'
  },
  {
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas'
  }
];

var lastBook = library.pop();
console.log('The value of lastBook is: ', lastBook);

var firstBook = library.shift();
console.log('The value of firstBook is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
// var splice = library.splice(1);
// console.log("The value of splice is: ", splice);
console.log('The value of library is:', library);

// STRING METHODS
var fullName = 'Jumanah Almajnouni';
var fisrtAndLastName = fullName.split(' ');
console.log('The value of fisrtAndLastName is:', fisrtAndLastName);

var firstName = fisrtAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName is:', sayMyName);
