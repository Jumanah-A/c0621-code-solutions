/* exported pick */

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
