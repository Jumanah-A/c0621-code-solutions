const feature = process.argv[2];
const content = process.argv.slice(3);
const readItem = require('./read');
const createItem = require('./create');
const deleteItem = require('./delete');
const updateItem = require('./update');
const fs = require('fs');
const data = require('./data.json');

switch (feature) {
  case 'read':
    readItem(data.notes);
    break;
  case 'create':
    writeData(JSON.stringify(createItem(data, content[0]), null, 2));
    break;
  case 'update':
    writeData(JSON.stringify(updateItem(data, content[0], content[1]), null, 2));
    break;
  case 'delete':
    writeData(JSON.stringify(deleteItem(content[0], data), null, 2));
    break;
  default:
    console.log(`Invalid operation: ${feature} is not a valid operation please enter a valild operation to preform`);
}
function writeData(newData) {
  fs.writeFile('data.json', newData, err => { if (err) throw err; });
}
