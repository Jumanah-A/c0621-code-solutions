/* exported titleCase */

// if the item is at index 0 or its preceded by a : then we capitailize
/* seperate the sentence by a space and assign it t the stringf array
go over evry item in the array
if the the word is in the list of minor words
  if the item is the first one at index 0 or it is preceded by a ":"
    then capitalize first letter
  else
    keey thye minor word as it is

else if the word includes a dash
  if the amound of words separetd by a - is greater than 2
    then iterate over thena nd capitalize each word between the dashes
  else
    capitalize each word between the dashes
else
  if the word is javscript contain its camel case
  else if the word is api
    capitalize it
  else ifthe word is javscript followed a :
    maintain camelcase and add the :
  else if the word is api followed by a :
    capitlize and add :
  else
    just capitaliz the first letter and lowercas ethe rest

    */
function titleCase(string) {
  var titleString = '';
  var stringArray = string.split(' ');
  var minor = ['as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'a', 'an', 'the', 'and', 'or', 'nor', 'but'];

  for (var i = 0; i < stringArray.length; i++) {
    if (minor.includes(stringArray[i])) {
      if (i === 0 || stringArray[i - 1][stringArray[i - 1].length - 1] === ':') {
        titleString += stringArray[i][0].toUpperCase() + stringArray[i].slice(1) + ' ';
      } else {
        titleString += stringArray[i] + ' ';
      }

    } else if (stringArray[i].includes('-')) {
      var temp = stringArray[i].split('-');
      if (temp.length > 2) {
        for (var j = 0; j < temp.length; j++) {
          titleString += temp[j][0].toUpperCase() + '-';
        }
        titleString = titleString.slice(0, titleString.length - 1) + ' ';
      } else {

        titleString += temp[0][0].toUpperCase() + temp[0].slice(1).toLowerCase() + '-' + temp[1][0].toUpperCase() + temp[1].slice(1).toLowerCase() + ' ';
      }
    } else {
      if (stringArray[i].toLowerCase() === 'javascript') {
        titleString += 'JavaScript ';
      } else if (stringArray[i].toLowerCase() === 'api') {
        titleString += 'API ';
      } else if (stringArray[i].slice(0, stringArray[i].length - 1).toLowerCase() === 'javascript') {
        titleString += 'JavaScript' + stringArray[i][stringArray[i].length - 1] + ' ';
      } else if (stringArray[i].slice(0, stringArray[i].length - 1).toLowerCase() === 'api') {
        titleString += 'API' + stringArray[i][stringArray[i].length - 1] + ' ';
      } else {
        titleString += stringArray[i][0].toUpperCase() + stringArray[i].slice(1) + ' ';
      }
    }
  }
  return titleString.slice(0, titleString.length - 1);
}
