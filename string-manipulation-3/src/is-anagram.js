/* exported isAnagram */

// disclaimer I tried not to use many for loops, but i ended up using them
/*
set two variables for the two strings
convert the two strings to arrays to be able to sort them
and check for equality
sort the two arrays
if string converted arrays are equal to each other
  return true
else
  we chcek for spaces
  we go over the first array and delete the spaces
  the spaces will be the first elelemt in the sorted array
  we just chcek the begininging of the arrays until we reach a charcter that is not a space
  if the charcter is a space
  we delete the space
  after the arrays are free of spaces
  we check for equal
  if ===
  return true
  else
  return false
*/
function isAnagram(firstString, secondString) {
  var firstArray = firstString.split('');
  var secondArray = secondString.split('');
  firstArray.sort();
  secondArray.sort();
  if (firstArray.toString() === secondArray.toString()) {
    return true;
  } else {
    var index = 0;
    while (firstArray[index] === ' ') {
      if (firstArray[index] === ' ') {
        firstArray.shift();
      }
    }
    while (secondArray[index] === ' ') {
      if (secondArray[index] === ' ') {
        secondArray.shift();
      }
    }
  }
  if (firstArray.toString() === secondArray.toString()) {
    return true;
  } else {
    return false;
  }
}
