/* exported invert */
/*
set anew variable for the value of the source object
create a new object for the newe values
go over every key value pairs in the source object
  set the current value to be the key
  and set thge key to be the value
return the new object

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
