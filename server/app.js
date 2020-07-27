const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const { getAll, getOne } = require('./recipeController.js');
const { addOne, deleteOne, getList } = require('./shoplistController.js');
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
app.post('/addItem', addOne);
app.post('/deleteItem', deleteOne);
app.get('/getList', getList);
module.exports = app;
