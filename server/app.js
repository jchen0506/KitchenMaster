const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { getAll, getOne } = require('./controller.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(express.static(path.resolve(__dirname + '/../client/dist')));

app.get('/searchRecipe', getAll);
app.get('/recipes/:id', getOne);

module.exports = app;
