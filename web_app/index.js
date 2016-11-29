const fs = require('fs');
const options = JSON.parse(fs.readFileSync('package.json'));
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

app.use('/demo/:id', (req, res) => {
  res.send(`params: ${JSON.stringify(req.params)}<br>query: ${JSON.stringify(req.query)}`);
})

app.use(express.static(options.webServer.folder));

server.listen(options.webServer.port, () => {
  console.log(`web server started on port ${options.webServer.port}.`);
});
