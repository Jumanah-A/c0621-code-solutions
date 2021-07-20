/* exported union */

/*
first we deep copy the first array to anewArray variable
the union is evrything both of the arrays with no repitiotion
then we iterate over the second array
  if the item in the second array is in the new array then we skip
  else
    we push the element.
 */
function union(first, second) {
  var newArray = JSON.parse(JSON.stringify(first));
  for (var i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
