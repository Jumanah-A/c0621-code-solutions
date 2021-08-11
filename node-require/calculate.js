const divide = require('./divide');
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);
const operand = process.argv[3];
let result;

switch (operand) {
  case 'plus':
    result = add.add(x, y);
    break;
  case 'minus':
    result = subtract.subtract(x, y);
    break;
  case 'multiply':
    result = multiply.multiply(x, y);
    break;
  case 'divide':
    result = divide.divide(x, y);
}
console.log(`Result: ${result}`);
