/* exported isPalindromic */

function isPalindromic(string) {
  var len = string.length;
  var dividedByHalf = Math.floor(len / 2);
  // debugger;
  if (len % 2 === 0) {
    if (string.slice(0, dividedByHalf) === string.slice(dividedByHalf - 1)) {
      return true;
    } else {
      return false;
    }
  } else {
    if (string.substr(0, dividedByHalf) === string.substr(dividedByHalf + 1)) {
      return true;
    } else {
      return false;
    }

  }
}
