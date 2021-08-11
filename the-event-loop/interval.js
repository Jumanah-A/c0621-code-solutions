let countThree = 3;
const intervalID = setInterval(callBack, 1000);
function callBack() {
  if (countThree > 0) {
    console.log(countThree);
    countThree--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}
