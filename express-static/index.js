const express = require('express');
const path = require('path');
const app = express();

const joinedPath = path.join(__dirname, 'public');
console.log(__dirname);
console.log(joinedPath);
const fileServer = express.static('public');

app.use(fileServer, (req, res) => {});

app.listen(3000, () => { console.log('listening on port 3000'); });
