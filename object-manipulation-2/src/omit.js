/* exported omit */
/*
create a new object to store the new keys and value
go over every key inthe source object
  if the current key is  not in the array keys
  add thge key and the value to the new object
return the new object */

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (keys.includes(key) === false) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
