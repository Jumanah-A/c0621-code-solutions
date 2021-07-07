/* exported lastChars */
// if the length of tehparamneter is greater than that of the string
// return the string itself
// else
// return the string returned by the slice method of the string by getting ths substring
// of the last string using the length provided

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  return string.slice(string.length - length);
}
