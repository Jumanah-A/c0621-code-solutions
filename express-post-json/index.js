
const express = require('express');
let nextId = 1;
const grades = {};
const app = express();

app.get('/api/grades', (req, res) => {
  const objectArray = [];
  for (var key in grades) {
    objectArray.push(grades[key]);
  }
  res.json(objectArray);
});

app.listen(3000, () => {});

const jsonInstance = express.json();
app.use(jsonInstance);

app.post('/api/grades', (req, res) => {
  let newBody = {};
  newBody = req.body;
  newBody.id = nextId;
  res.status(201).send(newBody);
  grades[nextId] = req.body;
  nextId++;
});
