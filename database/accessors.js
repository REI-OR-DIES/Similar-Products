const mongoose = require('mongoose');

const productSchema =  new mongoose.Schema({
  name: String,
  imageUrl: String
});

const Product = mongoose.model('Product', productSchema);

var readAllProducts = function(callback) {
  console.log('got to readAll accessor');
  Product.find(function (err, products) {
    if (err) {
      return console.error(err);
    }
    callback(products);
  })
}
var createProduct = function(name, imageUrl) {
  var product = new Product({
    name: name,
    imageUrl: imageUrl
  });
  product.save((err, product) => {
    if (err) {
      return console.error(err);
    }
  });
}
var drop = function(database, callback) {
  return database.dropDatabase(callback);
}

module.exports = {
  readAllProducts,
  createProduct,
  drop
}