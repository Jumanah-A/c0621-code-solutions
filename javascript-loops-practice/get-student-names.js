/* exported getStudentNames */
function getStudentNames(students) {
  var namesArray = [];
  for (var key in students) {
    namesArray.push(students[key].name);
  }
  return namesArray;
}
