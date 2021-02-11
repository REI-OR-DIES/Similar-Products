const { Pool } = require('pg')
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
});


const getProducts = (id) => {
  pool.query(`SELECT * FROM sdcproducts WHERE category_id = '${id}' ORDER BY RANDOM() LIMIT 4`)
  .then((result) => {return result.rows})
  .catch((err) => {console.log(err)})
}

module.exports = {
  getProducts,
}
