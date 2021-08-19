const express = require('express');
const pg = require('pg');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

function validateGrade(grade) {
  if (grade.name === undefined || grade.course === undefined || grade.score === undefined) {
    return { error: 'You must enter all grade fields: name, course, score.' };
  } else if (isNaN(parseInt(grade.score)) || parseInt(grade.score) < 0 || parseInt(grade.score) > 100) {
    return { error: 'Score value must be a postive integer.' };
  }
  return {};
}

const jsonInstance = express.json();
app.use(jsonInstance);

app.get('/api/grades', (req, res) => {
  const getSql = 'select * from "grades"';
  db.query(getSql)
    .then(result => {
      res.status(200).send(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const valid = validateGrade(req.body);
  if (valid.error !== undefined) {
    res.status(400).json(valid);
    return;
  }
  const postSql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *`;
  const params = [req.body.name, req.body.course, parseInt(req.body.score)];
  db.query(postSql, params)
    .then(result => {
      res.status(201).send(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const valid = validateGrade(req.body);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (valid.error !== undefined) {
    res.status(400).json(valid);
    return;
  }
  const putSql = `
  update "grades"
   set "course"       = $1,
       "name"         = $2,
       "score"        = $3
      where "gradeId" = $4
      returning *`;

  const values = [req.body.course, req.body.name, parseInt(req.body.score), gradeId];
  db.query(putSql, values)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).send(result.rows[0]);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const deleteSql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;`;
  const values = [gradeId];
  db.query(deleteSql, values)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {});
