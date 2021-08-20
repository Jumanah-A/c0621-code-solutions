function filter(array, predicate) {
  const result = [];
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
