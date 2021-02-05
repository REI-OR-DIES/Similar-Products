// const faker = require('faker');
// const database = require('./index');

// var seed = function(num) {
//   database.drop(() => {
//     for (let i = 0; i < num; i++) {
//       let name = faker.commerce.productName();
//       let imageUrl = faker.image.image();
//       let price = faker.commerce.price();
//       let description = faker.commerce.productDescription();
//       database.createProduct(name, imageUrl, price, description);
//     }
//   })
// }

// module.exports = {
//   seed
// }



// INSERT INTO sdcproducts (
//   product_id,
//   name,
//   image_url,
//   price,
//   description,
//   category_id
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
//   price integer NOT NULL,
//   description varchar(250) NOT NULL,
//   category_id integer NOT NULL);