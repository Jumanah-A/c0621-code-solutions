/* exported getKeys */

// set new array for a list of objects
// go through the object
//   get the keys
//   append the keys to newArray
// return the arrayyy

function getKeys(object) {
  var keysArray = [];
  for (var key in object) {
    keysArray.push(key);
  }
  return keysArray;

}
