const express = require('express');
const app = express();

app.use((req, res) => {
  // console.log(req.method);
  res.send('Hello World!!');
});

app.listen(3000, () => {
  // console.log("The server is listening on port 300")
});
