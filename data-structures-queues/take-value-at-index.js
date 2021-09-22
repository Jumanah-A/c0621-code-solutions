/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    let count = 0;
    while (queue.peek() !== undefined) {
      if (count === index) {
        return queue.dequeue();
      }
      queue.enqueue(queue.dequeue());
      count++;
    }
  }
}
