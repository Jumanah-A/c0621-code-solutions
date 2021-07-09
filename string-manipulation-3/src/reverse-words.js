/* exported reverseWords */

/*
convert the string to array split by space to traeat each word alone and maintain order
create variable for empty string to concatonate to
go over every word in the arrayString
create a varible with an empty string
go over every letter in the word using revrse indexing
concatonate the the letters to the variable reversedWord and a space
return the string without  the space

*/
function reverseWords(string) {
  var arrayString = string.split(' ');
  var reversedFinal = '';
  // debugger;
  for (var i = 0; i < arrayString.length; i++) {
    var reversedWord = '';
    for (var num = arrayString[i].length - 1; num >= 0; num--) {
      reversedWord += arrayString[i][num];
    }
    reversedFinal += reversedWord + ' ';
  }
  return reversedFinal.slice(0, reversedFinal.length - 1);
}
