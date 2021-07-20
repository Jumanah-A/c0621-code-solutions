/* exported intersection */

/*
we create a new array variable
we iterate over a the first array
  if the second array contains the item we are iterating over
    we push it
return the array
*/
function intersection(first, second) {
  var intersected = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersected.push(first[i]);
    }
  }
  return intersected;

}
