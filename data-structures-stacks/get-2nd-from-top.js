/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const modified = stack.print().slice(8, -2).split('<-');
  if (modified[0] === '<empty>') {
    return undefined;
  }
  if (modified.length === 1) {
    return undefined;
  }
  return JSON.parse(modified[modified.length - 2]);

}
