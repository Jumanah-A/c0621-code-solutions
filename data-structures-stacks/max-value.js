/* exported maxValue */

function maxValue(stack) {
  let max = stack.peek();
  if (!max) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      if (stack.peek() > max) {
        max = stack.peek();
      }
      stack.pop();
    }
    return max;
  }
}
