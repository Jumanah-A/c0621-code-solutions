/* exported countValues */

function countValues(stack) {
  if (stack.print().split('<-').length === 1) {
    return 0;
  } else {
    return stack.print().split('<-').length;
  }

  // let count=0;
  // while()

}
