const fs = require('node:fs');

const readPage = (pathname = 'index') => {
  let pageData = null;

  fs.readFile(`.${pathname}.html`, 'utf-8', (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }

    pageData = data;
  });

  return pageData;
};

module.exports = { readPage };
