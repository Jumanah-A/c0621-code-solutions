/* exported numVowels */
// go through every character in the string
// check if that charcater is in teh list of vowel is it returrn true then
// incremnet the number of sum
function numVowels(string) {
  var sum = 0;
  var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      sum++;
    }

  }
  return sum;
}
