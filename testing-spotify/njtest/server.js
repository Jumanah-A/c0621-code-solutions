/* Load the HTTP library */
// var http = require("http");

// /* Create an HTTP server to handle responses */

// http.createServer(function (request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.write("Hello World");
//   response.send("hello world");
//   response.end();
// }).listen(8888);

const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send("hello world");
  console.log("in the get method");
})



app.listen(3000, () => {console.log("listening on port 8888")});
