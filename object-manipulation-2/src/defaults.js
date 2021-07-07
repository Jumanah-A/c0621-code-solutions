/* exported defaults */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  for (var key in source) {
    if (targetKeys.length === 0 || targetKeys.includes(key) === false) {
      target[key] = source[key];
    }
  }

}
