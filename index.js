const { readPage } = require('./dataReader');
const http = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';

const port = 8080;

const server = http.createServer((req, res) => {
  const reqURL = new URL(req.url, `http://${hostname}:${port}/`);

  fs.readFile(`.${reqURL.pathname}.html`, 'utf-8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log(`Server is running at ${hostname} port ${port}`);
});
