const fs = require('fs');
const userInput = process.argv[2];
fs.writeFile('note.txt', userInput + '\n', err => {
  if (err) throw err;
});
