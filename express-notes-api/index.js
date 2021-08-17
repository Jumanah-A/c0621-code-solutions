const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.get('/api/notes',(req,res) =>
{
  const notesArray = [];
  if (Object.keys(data.notes).length !== 0)
  {
    for(const key in data.notes)
    {
      notesArray.push(data.notes[key]);
    }
  }
  res.status(200).send(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const itemId = req.params.id;
  if (itemId < 0)
  {
    res.status(400).send({"error":"You have entered a negative ID number, please enter an appropriate ID number."});
  } else if (Object.keys(data.notes).includes(itemId))
  {
    if ((Object.keys(data.notes[itemId]).includes('content')) && !(data.notes[itemId].content === "")) {
      res.status(200).send(data.notes[itemId]);
    }
  } else {
    res.status(404).send({ "error": `Cannot find a note for id ${itemId}` });
  }
})

const jsonInstance = express.json();
app.use(jsonInstance);

app.post('/api/notes', (req,res) =>
{
  const entryBody = req.body;
  if (!Object.keys(entryBody).includes('content'))
  {
    res.status(400).send({ "error": "content field is required" });
  }else
  {
    let newBody = {};
    let nextId = data["nextId"];
    newBody = req.body;
    newBody.id = nextId;
    data.notes[nextId] = req.body;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data), err => {
      if (err) {
        res.status(500).send({ "error": "An unexpected error occurred." });
      }else
        {
          res.status(201).send(newBody);
        }
      });
  }
});

app.delete('/api/notes/:id', (req,res) => {
  const itemId = req.params.id;
  if (itemId < 0) {
    res.status(400).send({ "error": "You have entered a negative ID number, please enter an appropriate ID number." });
  } else if (!(Object.keys(data.notes[itemId]).includes('content')) || (data.notes[itemId].content === "")) {
    res.status(404).send({ "error": `Cannot find a note for id ${itemId}` });
  }else
  {
    delete data.notes[itemId];
    fs.writeFile('data.json', JSON.stringify(data), err => {
      if (err) {
        res.status(500).send({ "error": "An unexpected error occurred." });
      } else {
        res.sendStatus(204);
      }
    });
  }
});
app.put('/api/notes:id',(req,res) => {
  // res.send("oh no!")
  // console.log("in the put method");
  // console.log(req.body);
  // const itemId = req.params.id;
  // if(itemId < 0)
  // {
  //   res.status(400).send({ "error": "You have entered a negative ID number, please enter an appropriate ID number." });
  // } else if (data.notes[itemId].content === "")
  // {
  //   es.status(404).send({ "error": `Cannot find a note for id ${itemId}` });
  // } else if (!Object.keys(req.body).includes('content'))
  // {
  //   res.status(400).send({ "error": "content field is required" });
  // }else
  // {
  //   data.notes[itemId] = req.body[content];
  //   fs.writeFile('data.json', JSON.stringify(data), err => {
  //     if (err) {
  //       res.status(500).send({ "error": "An unexpected error occurred." });
  //     } else {
  //       res.sendStatus(200);
  //     }
  //   });
  // };
})


app.listen(3000, () => {console.log("listening on port 3000!")});
