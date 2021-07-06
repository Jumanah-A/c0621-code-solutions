
function handleClick(event) {
  console.log('Button clicked');
  console.log(event);
  console.log(event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('Button hovered');
  console.log(event);
  console.log(event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $doubleClickedButton = document.querySelector('.double-click-button');
$doubleClickedButton.addEventListener('dblclick', handleDoubleClick);
