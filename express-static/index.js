const express = require('express');
const path = require('path');
const app = express();

const joinedPath = path.join(__dirname, 'public');
const fileServer = express.static(joinedPath);

app.use(fileServer, (req, res) => {});

app.listen(3000, () => { console.log('listening on port 3000'); });
