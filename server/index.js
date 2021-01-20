const express = require('express');
const database = require('../database/index.js');

const app = express();
const port = 3003;

app.use(express.static('../public'));

app.get('/api/products', (req, res) => {
  database.readAllProducts((results) => {
    res.send(results);
  });
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})