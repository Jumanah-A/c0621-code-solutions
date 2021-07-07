/* exported truncate */

// create new string varible
// concatonate empty string with the begining of the string till the end index
// concatonate the elipses
function truncate(length, string) {
  var newString = '';
  return newString + string.slice(0, length) + '...';
}
