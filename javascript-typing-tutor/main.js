
var $span = document.querySelectorAll('span');
var index = 0;
// var $incorrect = 0;
function handleKeyDown(event) {
  if ($span[index].textContent === event.key && index < 29) {
    $span[index].className = 'letter correct';
    index++;
    $span[index].className = 'letter current';
  } else if ($span[index].textContent === event.key && index === 29) {
    $span[index].className = 'letter correct';
    // console.log("in index === 29 block");
    // playAgain(event);
    // console.log("after calling playagain function");
  } else {
    $span[index].className = 'letter incorrect';
    // $incorrect++;
  }
}
document.addEventListener('keydown', handleKeyDown);

// var $hidden = document.querySelector('.hidden');
// function playAgain(event)
// {
//   console.log("in play again function");
//   $hidden.className = 'modal overlay-shadow';
// }
