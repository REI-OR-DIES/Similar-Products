const express = require('express');
const database = require('../database/index.js');

const app = express.Router();

app.get('/products', (req, res) => {
  database.readAllProducts((results) => {
    res.send(results);
  });
})

module.exports = app;