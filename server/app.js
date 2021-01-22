const express = require('express');
const database = require('../database/index.js');
const router = require('./router.js');

const app = express();

app.use('/api', router);
app.use(express.static('../public'));

module.exports = app;