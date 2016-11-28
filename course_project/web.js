'use strict';

const http = require('http');
const url = require('url');
const zlib = require('zlib');

// demo #1 - including path and file system modules
const path = require('path');
const fs = require ('fs');

const defaultFile = 'index.html';
const logFile = 'web.log';
const port = 3000;

// demo #5: rotate log file

// demo #4: append to log file

const server = http.createServer((req, res) => {

	req.originalUrl = req.url;
	req.url = url.parse(req.url, true);
	req.path = req.url.pathname === '/' ? defaultFile : req.url.pathname;

	// demo #2: using path functions to create requested file name
  let dirName = path.dirname(req.path);
  if (dirName.endsWith('/')) {
    dirName = dirName.slice(0, dirName.length - 1);
  }

  const reqFileName = path.format({
    dir: path.join(__dirname, 'www', dirName),
    base: path.basename(req.path)
  });

  console.log(reqFileName);

	const processBody = new Promise(resolve => {

		resolve();

		// demo #6: process request body data

	});

	const processFile = new Promise(resolve => {

		// demo #3: read request file
    fs.readFile(reqFileName, 'utf8', (err, fileData) => {
      if (err) {
        console.error(err);
        res.writeHead(404);
        res.end();
        return;
      }

      res.writeHead(200);
      res.end(fileData);
    });

		// demo #7: compressing response

    resolve();

	});

	processBody.then(() => processFile);

});

server.listen(port, err => console.log(err || `web server started on port ${port}`));
