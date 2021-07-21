var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var $img = document.querySelector('img');

function handleClick(event) {
  var $imgUrl = $img.getAttribute('src');
  if (event.target.className === 'fas fa-chevron-right fa-4x') {
    changeImage($imgUrl, 'right');
  } else if (event.target.className === 'fas fa-chevron-left fa-4x') {
    changeImage($imgUrl, 'left');

  } else if (event.target.className === 'far fa-circle') {
    document.querySelector('.current').className = 'far fa-circle';
    document.getElementById(event.target.id).className = 'current fas fa-circle';
    $img.setAttribute('src', imageArray[event.target.id]);
  }
}

function changeImage(imgUrl, direction) {
  var nextImageIndex = imageArray.indexOf(imgUrl);
  if (direction === 'right') {
    if (imageArray.indexOf(imgUrl) === imageArray.length - 1) {
      nextImageIndex = 0;
    } else {
      nextImageIndex++;
    }
  } else if (direction === 'left') {
    if (imageArray.indexOf(imgUrl) === 0) {
      nextImageIndex = imageArray.length - 1;
    } else {
      nextImageIndex--;
    }
  }
  document.querySelector('.current').className = 'far fa-circle';
  document.getElementById(nextImageIndex).className = 'current fas fa-circle';
  $img.setAttribute('src', imageArray[nextImageIndex]);
}

var $carousel = document.querySelector('.carousel');
var $progressBar = document.querySelector('.progress-bar');
$carousel.addEventListener('click', handleClick);
$progressBar.addEventListener('click', handleClick);

setInterval(myCallback, 3000);
function myCallback() {
  var $imgUrl = $img.getAttribute('src');
  changeImage($imgUrl, 'right');
}
