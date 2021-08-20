function map(array, transform) {
  const result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(transform(array[i]));
  }
  return result;

}
