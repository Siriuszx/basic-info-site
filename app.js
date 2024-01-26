const express = require('express');
const app = express();
const defaultRouter = require('./routes/router');
const port = 3000;

app.use(defaultRouter);

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
