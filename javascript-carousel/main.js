var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $img = document.querySelector('img');
var index = 0;
function handleClick(event) {
  var $imgUrl = $img.getAttribute('src');
  if (event.target.className === 'fas fa-chevron-right fa-4x') {
    clearInterval(intervalId);
    intervalId = setInterval(myCallback, 3000);
    changeImage($imgUrl, 'right');

  } else if (event.target.className === 'fas fa-chevron-left fa-4x') {
    clearInterval(intervalId);
    intervalId = setInterval(myCallback, 3000);
    changeImage($imgUrl, 'left');

  } else if (event.target.className === 'far fa-circle') {
    clearInterval(intervalId);
    intervalId = setInterval(myCallback, 3000);
    document.querySelector('.current').className = 'far fa-circle';
    document.getElementById(event.target.id).className = 'current fas fa-circle';
    $img.setAttribute('src', imageArray[event.target.id]);
  }
}

function changeImage(imgUrl, direction) {
  if (direction === 'right') {
    if (index === imageArray.length - 1) {
      index = 0;
    } else {
      index++;
    }
  } else if (direction === 'left') {
    if (index === 0) {
      index = imageArray.length - 1;
    } else {
      index--;
    }
  }
  document.querySelector('.current').className = 'far fa-circle';
  document.getElementById(index).className = 'current fas fa-circle';
  $img.setAttribute('src', imageArray[index]);
}

var $carousel = document.querySelector('.carousel');
var $progressBar = document.querySelector('.progress-bar');
$carousel.addEventListener('click', handleClick);
$progressBar.addEventListener('click', handleClick);

function myCallback() {
  var $imgUrl = $img.getAttribute('src');
  changeImage($imgUrl, 'right');
}
var intervalId = setInterval(myCallback, 3000);
