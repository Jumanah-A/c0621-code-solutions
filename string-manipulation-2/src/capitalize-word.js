/* exported capitalizeWord */
// check if evry word is javascript
// if it is return the string "JavaScript"
// else
// return the first leter as a capital letter and the rest and lowercase

function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
