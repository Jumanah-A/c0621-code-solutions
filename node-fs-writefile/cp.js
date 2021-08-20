const fs = require('fs');
const fileContent = process.argv[2];
const fileName = process.argv[3];

fs.readFile(fileContent, 'utf8', (err, data) => {
  if (err) throw err;
  writeData(data);
});
function writeData(data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
  });
}
