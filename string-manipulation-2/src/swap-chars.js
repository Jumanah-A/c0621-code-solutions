/* exported swapChars */
// set up a new string to fro the swapped string
// iterate over the string until the firsr index is found
// concatonate in teh place of teh first index the value of the string in the second index
// if second index is found
// concatonate in teh place of teh sceond index the value of the string in the first index
// else
// concatonate the ramining values in the string as they are.
// return the swapped string
function swapChars(firstIndex, secondIndex, string) {
  var swapped = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped += string[secondIndex];
    } else if (i === secondIndex) {
      swapped += string[firstIndex];

    } else {
      swapped += string[i];
    }
  }
  return swapped;
}
