const nr = require('newrelic')
const compression = require('compression');
const express = require('express');
const path = require('path');
const CORS = require('cors');
const db = require('../databasePg')

const app = express();

app.use(compression());

app.use(CORS());
console.log('path join: ' + path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')))


app.get('/products',  function dbRoute(req, res)  {
  db.getProducts(120)
  .then((result) => {
    res.status(200).send(result)
  })
  .catch((err)=> {
    res.status(500).send(err)
  })
});


module.exports = app;