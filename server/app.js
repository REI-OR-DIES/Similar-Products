const nr = require('newrelic')
const express = require('express');
const path = require('path');
const CORS = require('cors');
const db = require('../databasePg')

const app = express();

app.use(CORS());
console.log('path join: ' + path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')))


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


app.get('/products', (req, res) => {
  db.getProducts(140)
  .then((response) => {res.status(200).send(response)})
  .catch((err) => {res.status(500).send(err)})


module.exports = app;
