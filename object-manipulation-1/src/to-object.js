/* exported toObject */

// create object variable
// go througvh the array
// set the key to the value
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;

}
