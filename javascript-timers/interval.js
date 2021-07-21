var intervalID = setInterval(myCallback, 2000);
function myCallback() {
  var heading = parseInt(document.querySelector('h1').textContent);
  if (heading > 1) {
    heading--;
    document.querySelector('h1').textContent = heading;
  } else {
    document.querySelector('h1').textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
