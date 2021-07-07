/* exported capitalizeWords */

// create an array of the words seperated by the space
// create a empty string to store the new string
// go over each word in the array
// chnage the first letter to uppercase and the rest to lopwer case + space
// return the final string deleting the extra space using the slice method
function capitalizeWords(string) {
  var wordsArray = string.split(' ');
  var newString = '';
  for (var i = 0; i < wordsArray.length; i++) {
    newString += wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1).toLowerCase() + ' ';
  }
  return newString.slice(0, string.length);
}
