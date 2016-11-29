const fs = require('fs');
const options = JSON.parse(fs.readFileSync('package.json'));
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

app.get('/demo', (req, res, next) => {
  console.log('handled demo request 1');
  req.body = 'demo test!';
  next();
});

app.get('/demo', (req, res) => {
  console.log('handled demo request 2');
  res.json({ msg: req.body });
});

app.use(express.static(options.webServer.folder, {
  index: 'index2.html',
  setHeaders: (res, path, stat) => {
    res.set('X-Custom-Header', 'My Express App');
  }
}));

server.listen(options.webServer.port, () => {
  console.log(`web server started on port ${options.webServer.port}.`);
});
