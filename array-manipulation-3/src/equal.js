/* exported equal */
/*
first we check if the two arrays have the same length
if true
  we itarate over the first array
    we check both arrays at the same index
    if they at any point return false
    the functions returns false and we exit
    else the function will return true if the end of the array is reached
    and they are both equal to each other
else
  return false
*/
function equal(first, second) {
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
