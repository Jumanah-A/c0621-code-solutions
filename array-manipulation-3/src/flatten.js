/* exported flatten */

// create a new array to push teh items into
// iteratate over the given array
// if the item in the array is an array
// then iterate over the item and push it to the newArray
// else just bush the item
// return teh new array
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
