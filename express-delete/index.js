const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const objArr = [];
  for (var key in grades) {
    objArr.push(grades[key]);
  }
  res.json(objArr);
});

app.delete('/api/grades/:id', (req, res) => {
  var delId = req.params.id;
  delete grades[delId];
  res.sendStatus(204);
});

app.listen(3000, () => {});
