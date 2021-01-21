const express = require('express');
const database = require('../database/index.js');
const app = require('./app.js');

const port = 3003;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

module.exports = app;