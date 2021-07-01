/* exported countdown */

function countdown(number) {
  var countDownArray = [];
  var current = number;
  for (var i = 0; i < number + 1; i++) {
    countDownArray.push(current);
    current -= 1;
  }
  return countDownArray;
}
