const express = require('express');
const path = require('path');
const CORS = require('cors');
const db = require('../databasePg')

const app = express();

app.use(CORS());
console.log('path join: ' + path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')))


app.get('/products', async (req, res) => {
  try {
    var result = await db.getProducts();
    res.status(200).send(result);
  } catch(err) {
    res.status(500).send(err)
  };
});


module.exports = app;
