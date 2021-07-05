/* exported compact */

// set an array for the truthy values
// go though every item
// check if its truthy
// push the value into the array
// then return the array
function compact(array) {
  var truthyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
