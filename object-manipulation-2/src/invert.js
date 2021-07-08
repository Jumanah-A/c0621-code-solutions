/* exported invert */
/*

*/

function invert(source) {
  var sourceValue;
  var newObject = {};
  for (var key in source) {
    sourceValue = source[key];
    newObject[sourceValue] = key;
  }
  return newObject;
}
