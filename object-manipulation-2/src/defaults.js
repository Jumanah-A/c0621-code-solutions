/* exported defaults */

/*
create an array of the target keys
go over every key in the source object
if the target key array is empty or if the key is not in the target keys array
append the key band value to the target object
*/
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  for (var key in source) {
    if (targetKeys.length === 0 || targetKeys.includes(key) === false) {
      target[key] = source[key];
    }
  }

}
