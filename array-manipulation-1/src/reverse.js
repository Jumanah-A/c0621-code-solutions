/* exported reverse */
function reverse(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;

}
