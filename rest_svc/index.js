const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const widgetRouter = require('./routers/widgets');

const app = express();
const server = http.createServer(app);

app.use('/api', bodyParser.json());
app.use('/api', widgetRouter);

server.listen(3000, () => {
  console.log('rest service running on port 3000');
});
