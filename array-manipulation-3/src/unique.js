/* exported unique */
/*
check if the array is empty to avoid for loops
else
  go through every elemnet in array
    if the uniquearray doenst have the element
      push the elment into unique array */
function unique(array) {
  var uniqueArray = [];
  if (array === []) {
    return [];
  } else {
    for (var i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
  }
  return uniqueArray;
}
