/* exported flatten */

function flatten(array) {
  // debugger;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i].isArray === true) {
      for (var j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
