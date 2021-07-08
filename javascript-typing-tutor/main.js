
var $span = document.querySelectorAll('span');
var index = 0;
var $incorrect = 0;
var $hidden = document.querySelector('.hidden');
var lettersTyped = 0;
function handleKeyDown(event) {
  lettersTyped++;
  if ($span[index].textContent === event.key && index < $span.length - 1) {
    $span[index].className = 'letter correct';
    index++;
    $span[index].className = 'letter current';
  } else if ($span[index].textContent === event.key && index === $span.length - 1) {
    $span[index].className = 'letter correct';
    $hidden.className = 'modal overlay-shadow';
    index = 0;
    for (var i = 0; i < $span.length; i++) {

      $span[i].className = 'reset letter';
    }
    $span[index].className = 'letter current';
    var accuracy = ((30 - $incorrect) / lettersTyped) * 100;
    document.querySelector('.accuracy').textContent = 'Accuracy: ' + accuracy + '%';
  } else {
    $span[index].className = 'letter incorrect';
    $incorrect++;
  }
}
document.addEventListener('keydown', handleKeyDown);
function handleButton(event) {
  $hidden.className = 'hidden';
}
var $noButton = document.querySelector('.no-button');
var $yesButton = document.querySelector('.yes-button');
$noButton.addEventListener('click', handleButton);
$yesButton.addEventListener('click', handleButton);
