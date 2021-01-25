const express = require('express');
const database = require('../database/index.js');
const router = require('./router.js');
const path = require('path');

const app = express();

app.use('/api', router);
console.log('path join: ' + path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')))

module.exports = app;