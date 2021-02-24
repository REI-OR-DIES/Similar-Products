const fs = require('fs');
const path = require('path');
const json2csv = require('json2csv').parse;
const newLine = '\r\n';
const faker = require('faker');
const database = require('../databasePg/index');

const write = async (fileName, fields, data, qty) => {

    const filename = path.join(__dirname, `${fileName}`);
    let rows;

    if (!fs.existsSync(filename)) {
        rows = await json2csv(data, fields, { header: true });
    } else {
        rows = await json2csv(data, { header: false });
    }

    fs.appendFileSync(filename, rows);
    fs.appendFileSync(filename, "\r\n");

    qty --;
  }


  var recordsToGenerate = 1000000;
  var prices = [59.99, 69.99, 79.99, 89.99, 129.99]

  while (recordsToGenerate > 0) {

    // establish table columns
    var fields = ['name', 'imageUrl', 'price', 'description', 'category_id'];

    write('products10.csv', fields, data, 10);

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    // faker data generator
    var data = [
      {
        name: faker.commerce.productName(),
        imageUrl: faker.image.image(),
        price: prices[getRandomInt(0, 4)],
        description: faker.commerce.productDescription(),
        category_id: getRandomInt(1, 150)
      }
    ];
    recordsToGenerate--;
  }

