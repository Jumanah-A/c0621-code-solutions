/* exported compact */

// set an array for the truthy values
// go though every item
// check if its falsy
// if it isNaN, continue
// else
// push the value into the array
// then return the array
function compact(array) {
  var truthyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array) === false || Boolean(array[i]) === false) {
      continue;
    } else {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
