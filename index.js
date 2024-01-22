const http = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';

const port = 8080;

const server = http.createServer((req, res) => {
  const baseURL = req.url === '/' ? '/index' : req.url;
  const reqURL = new URL(baseURL, `http://${hostname}:${port}/`);

  fs.readFile(`.${reqURL.pathname}.html`, 'utf-8', (err, data) => {
    if (err) {
      fs.readFile('./404.html', 'utf-8', (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log(`Server is running at ${hostname} port ${port}`);
});
