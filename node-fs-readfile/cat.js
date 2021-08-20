
const fileArray = process.argv.slice(2);
const fs = require('fs');
const objArr = [];
let counter = fileArray.length;

for (var i = 0; i < fileArray.length; i++) {
  const currentFile = fileArray[i];
  fs.readFile(currentFile, 'utf-8',
    (err, data) => {
      if (err) { console.log(err); }
      objArr[i] = data;
      counter--;
      if (counter === 0) {
        console.log(objArr.join('/n'));
      }
    });
}

// function readFile() {
//   let object = {};
//   for (var i = 0; i < fileArray.length; i++) {
//     const currentFile = fileArray[i];
//     object.name = currentFile;
//     fs.readFile(fileArray[i], 'utf-8',
//       (err, data) => {
//         if (err) { console.log(err); } else {
//           object[currentFile] = data;
//           printInOrder(object);
//         }
//       });
//     object = {};
//   }
// }
// function printInOrder(obj) {
//   let finalString = '';
//   objArr.push(obj);
//   if (objArr.length === fileArray.length) {
//     for (var i = 0; i < fileArray.length; i++) {
//       finalString += getData(fileArray[i]);
//     }
//     console.log(finalString);
//   }
// }

// function getData(targetKey) {
//   for (var j = 0; j < objArr.length; j++) {
//     for (const [key, value] of Object.entries(objArr[j])) {
//       if (targetKey === key) {
//         return value;
//       }
//     }
//   }
// }
// readFile();
