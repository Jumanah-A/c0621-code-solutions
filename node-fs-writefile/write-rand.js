const fs = require('fs');
fs.writeFile('random.txt', String(Math.random()) + '\n', 'utf-8', err => {
  if (err) throw err;
});
