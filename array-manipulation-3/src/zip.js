/* exported zip */

// first we check which array is shorter
// then we iterate through that
//  set zipped array = a new array with first[i] and second [i]
// /return zipped
function zip(first, second) {
  var realArray;
  var zipped = [];
  if (first.length <= second.length) {
    realArray = first;
  } else {
    realArray = second;
  }
  for (var i = 0; i < realArray.length; i++) {
    zipped.push([first[i], second[i]]);
  }
  return zipped;

}
