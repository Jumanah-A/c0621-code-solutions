/* exported pick */

/*
create an array of the keys in the object using the keys method of the onject object
create new object
  go over keys array
  if the current key is in the object keys array
    add the that key value pair in the new object
return object
*/

function pick(source, keys) {
  var sourceKeys = Object.keys(source);
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (sourceKeys.includes(keys[i])) {
      if (source[keys[i]] !== undefined) {
        newObject[keys[i]] = source[keys[i]];
      }
    }
  }
  return newObject;

}
