var student = {
  firstName: 'Jumanah',
  lastName: 'Almajnouni',
  age: 22
};
var fullName = student.firstName + student.lastName;
console.log('Value of fullName: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'student';
console.log('Value of student.livesInIrvine: ', student.livesInIrvine);
console.log('Value of student.previousOccupation: ', student.previousOccupation);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Mustang',
  model: 'Ford',
  year: '2020'
};
vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;
console.log("Value of vehicle['color']: ", vehicle['color']);
console.log("Value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Monica',
  type: 'Maltese'
};

delete pet.name;
delete pet.type;

console.log('Value of pet', pet);
