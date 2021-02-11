const fs = require('fs');
const path = require('path');
const json2csv = require('json2csv').parse;
const newLine = '\r\n';
const faker = require('faker');
const database = require('../databasePg/index');

// Populates products.csv in current directory
const write = async (fileName, fields, data) => {

    // output file in the same folder
    const filename = path.join(__dirname, `${fileName}`);
    let rows;
    // If file doesn't exist, we will create new file and add rows with headers.
    if (!fs.existsSync(filename)) {
        rows = await json2csv(data, { header: true });
    } else {
        // Rows without headers.
        rows = await json2csv(data, { header: false });
    }

    // Append file function can create new file too.
    fs.appendFileSync(filename, rows);
    // Always add new line if file already exists.
    fs.appendFileSync(filename, "\r\n");

    qty --;
  }


  var recordsToGenerate = 10;
  var prices = [59.99, 69.99, 79.99, 89.99, 129.99]

  while (recordsToGenerate > 0) {

    // generates table columns
    var fields = ['name', 'imageUrl', 'price', 'description', 'category_id'];

    write('te.csv', fields, data);

    // Random number generator for product category.
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    // faker data generator for table fields
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


// INSERT INTO sdcproducts (
  // product_id,
  // name,
  // image_url,
  // price,
  // description,
  // category_id
// ) VALUES (
// 1,
// 'awesome jacket',
// '/Users/erichyde/HR/sdc/GAR-FEC-SimilarProducts/databasePg/images/endOfInternet.jpg',
// 79.99,
// 'cyber cat spinning out the vibes',
// 'jacket'
// );

// https://www.youtube.com/watch?v=qw--VYLpxG4
// 36:50

// create table sdcproducts(
//   product_id SERIAL PRIMARY KEY,
//   name VARCHAR(60) NOT NULL,
//   image_url varchar(250) NOT NULL,
//   price DECIMAL NOT NULL,
//   description varchar(250) NOT NULL,
//   category_id integer NOT NULL);

// header
