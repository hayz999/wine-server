const express = require('express');
const port = parseInt(process.env.PORT || 3000);
const knex = require('./connection')
const bodyParser = require("body-parser");
const wines = require('./routes/wines')
const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello Wine!'));

app.use('/wines', wines);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));