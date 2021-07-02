/* exported getValues */

// set newarray for the values
// go through every property of the object
// get the value using []
// append value to the Array
// return the array
function getValues(object) {
  var valueArray = [];
  for (var key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
