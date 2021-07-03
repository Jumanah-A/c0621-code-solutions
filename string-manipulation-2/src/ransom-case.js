/* exported ransomCase */
// set an empty string for the array
// go over the length of tehg array
// if the number is even or 0 turn the letter to lowercase and concatonate to the string
// else concatonate the string and make sure its uppercase and then return th string
function ransomCase(string) {
  var ransomArray = [];
  for (var i = 0; i < string.length; i++) {
    if (i === 0 || i % 2 === 0) {
      ransomArray += string[i].toLowerCase();
    } else {
      ransomArray += string[i].toUpperCase();
    }
  }
  return ransomArray;
}
