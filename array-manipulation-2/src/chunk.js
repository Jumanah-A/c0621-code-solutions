/* exported chunk */
function chunk(array, size) {

  var newArray = [];
  var subArray = [];
  var count = 0;
  if (Boolean(array) === true) {
    // debugger;
    for (var i = 0; i < array.length; i++) {
      if (count < size) {
        subArray.push(array[i]);
        count++;
      } else {
        count = 0;
        newArray.push(subArray);
        subArray = [array[i]];
        // subArray.push
      }
    }
    newArray.push(subArray);
    return newArray;
  } else {
    return [];
  }
}
