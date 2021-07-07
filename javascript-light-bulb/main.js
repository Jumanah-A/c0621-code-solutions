
// create a querey dom variable
var $lightBulb = document.querySelector('.bulb');
var $bodyBackColor = document.querySelector('.background');

function handleClick(event) {
  if ($lightBulb.className === 'bulb') {
    $bodyBackColor.className = 'background background-off';
    $lightBulb.className = 'bulb bulb-off';

  } else if ($lightBulb.className === 'bulb bulb-off') {
    $bodyBackColor.className = 'background background-on';
    $lightBulb.className = 'bulb bulb-on';

  } else {
    $bodyBackColor.className = 'background background-off';
    $lightBulb.className = 'bulb bulb-off';
  }
}

// addeventlistener
$lightBulb.addEventListener('click', handleClick);
