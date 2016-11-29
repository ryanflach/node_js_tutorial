const fs = require('fs');
const options = JSON.parse(fs.readFileSync('package.json'));
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const server = http.createServer(app);

app.use(cookieParser);

app.use((req, res, next) => {
  console.log(req.cookies);
  res.cookie('demo', 'test');
  next();
});

app.use('/demo/:id', (req, res) => {
  res.send(`params: ${JSON.stringify(req.params)}<br>query: ${JSON.stringify(req.query)}`);
})

app.use(express.static(options.webServer.folder));

server.listen(options.webServer.port, () => {
  console.log(`web server started on port ${options.webServer.port}.`);
});
