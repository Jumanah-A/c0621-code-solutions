/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var current = 1;
  while (current !== 11) {
    numbers.push(current);
    current++;
  }
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber !== 22) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }

}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (count; count < times; count++) {
    repeated += word;
  }
  return repeated;

}
function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('javascript');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;

}

function getKeys(object) {
  var keys = [];
  var key;
  for (key in object) {
    keys.push(key);
  }
  return keys;

}
function getValues(object) {
  var values = [];
  var key;
  for (key in object) {
    values.push(object[key]);
  }
  return values;

}
