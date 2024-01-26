const express = require('express');
const fs = require('fs');
const defaultRouter = express.Router();

defaultRouter.get('/', (req, res) => {
  fs.readFile('pages/index.html', (err, data) => {
    if (err) throw new Error(err.message);
    res.send(data);
  });
});

defaultRouter.get('/:page', (req, res) => {
  const base = req.params.page || 'index';

  fs.readFile(`pages/${base}.html`, (err, data) => {
    if (err) {
      fs.readFile('pages/404.html', (err, data) => {
        if (err) throw new Error(err.message);
        res.send(data);
      });

      return;
    }

    res.send(data);
  });
});

module.exports = defaultRouter;
