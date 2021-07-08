/* exported chunk */
function chunk(array, size) {
// pseudocode
/*
we set up two varibles one for the new array and another for the sub array with the desired number of elements
we also set a counter for the current number of elements in the sub array
unless its an empty array we will go over every elements
if not empty (array size not = 0)
go over every element
if the our count is less than the desired size
we append the elment to the sub array and incremnet the count
else
we set coun
we append the subarray to the newarray and
set the subarray to an array with the current element
we reset the count to 1 the current size of subarray
else
return empty array
*/
  var newArray = [];
  var subArray = [];
  var count = 0;
  if (array.length !== 0) {
    for (var i = 0; i < array.length; i++) {
      if (count < size) {
        subArray.push(array[i]);
        count++;
      } else {
        newArray.push(subArray);
        subArray = [array[i]];
        count = 1;
      }
    }
    newArray.push(subArray);
    return newArray;
  } else {
    return [];
  }
}
