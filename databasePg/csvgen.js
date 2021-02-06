const fs = require('fs');
const path = require('path');
const json2csv = require('json2csv').parse;
const newLine = '\r\n';
const faker = require('faker');
const database = require('./index');

const write = async (fileName, fields, data, qty) => {

  while (qty > 0) {

    // output file in the same folder
    const filename = path.join(__dirname, `${fileName}`);
    let rows;
    // If file doesn't exist, we will create new file and add rows with headers.
    if (!fs.existsSync(filename)) {
        rows = json2csv(data, { header: true });
    } else {
        // Rows without headers.
        rows = json2csv(data, { header: false });
    }

    // Append file function can create new file too.
    fs.appendFileSync(filename, rows);
    // Always add new line if file already exists.
    fs.appendFileSync(filename, "\r\n");

    qty --;
  }
}

var fields = ['name', 'imageUrl', 'price', 'description', 'category_id'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var data = [
  {
    name: faker.commerce.productName(),
    imageUrl: faker.image.image(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category_id: getRandomInt(1, 10000)
  }
];

write('products.csv', fields, data, 10);
