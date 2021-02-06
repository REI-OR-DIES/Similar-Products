const { Pool } = require('pg')
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
});


const getProducts = async () => {
  try {
    var result = await pool.query('SELECT * FROM sdcproducts');
    return result.rows;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  getProducts,
}
