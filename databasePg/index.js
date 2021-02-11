const { Pool } = require('pg')
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
});


const getProducts = (id) => {
  return pool.query(`SELECT * FROM sdcproducts WHERE category_id = '${id}' LIMIT 4`)
  .then((result) => {return result.rows})
  .catch((err) => {console.log(err)})
}

module.exports = {
  getProducts,
}
