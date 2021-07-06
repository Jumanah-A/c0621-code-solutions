
var noClicked = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function handleClick(event) {
  noClicked++;
  $clickCount.textContent = 'Clicks: ' + noClicked;
  if (noClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (noClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (noClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (noClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (noClicked < 16) {
    $hotButton.className = ' hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', handleClick);
