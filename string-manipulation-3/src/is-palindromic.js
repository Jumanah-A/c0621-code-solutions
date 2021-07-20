/* exported isPalindromic */
/*
remove any spaces in teh string
if the length of the string is even
  check if the substring from the beginnig to length/2 === the substring(from the last index till the middle)
else (odd)
  cut the string in two disregarding the middle element
  reverse loop into the second half
  check if the sceond half is == to the first half
*/

function isPalindromic(string) {
  string = string.split(' ').join('');
  var dividedByHalf = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    if (string.slice(0, dividedByHalf) === string.slice(-dividedByHalf)) {
      return true;
    } else {
      return false;
    }
  } else {
    var firstHalf = string.slice(0, dividedByHalf);
    var secondHalf = string.slice(-(dividedByHalf));
    var reversedWord = '';
    for (var num = secondHalf.length - 1; num >= 0; num--) {
      reversedWord += secondHalf[num];
    }
    if (firstHalf === reversedWord) {
      return true;
    } else {
      return false;
    }
  }
}
