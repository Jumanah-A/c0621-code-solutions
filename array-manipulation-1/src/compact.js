/* exported compact */

function compact(array) {
  var truthyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array) === false || Boolean(array[i]) === false) {
      if (Boolean(array) === false) {
        return [];
      } else {
        continue;
      }
    } else {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
}
