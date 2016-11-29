const fs = require('fs');
const options = JSON.parse(fs.readFileSync('package.json'));
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

app.use(express.static(options.webServer.folder));

server.listen(options.webServer.port, () => {
  console.log(`web server started on port ${options.webServer.port}.`);
});
