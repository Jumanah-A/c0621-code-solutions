
var $span = document.querySelectorAll('span');
var index = 0;
// console.log($span);
function handleKeyDown(event) {
  if ($span[index].textContent === event.key) {
    index++;

  }
  // console.log($span[0].textContent);
  // console.log(event.key);
}
document.addEventListener('keydown', handleKeyDown);
