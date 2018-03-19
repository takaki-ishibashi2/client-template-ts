const express = require('express');
const path = require('path');
const server = express();
const port = 8081
server.use(express.static(path.join(__dirname, 'build')));
server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(`Listening on ${port}...`);