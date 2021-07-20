/* exported difference */
/*
we craete a newArray
we itaerte over the first array
  if the item is not in the second array
    we push the item

we iterate over the second array
  if the item is not in the first array
    we push the item

return the
*/

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
