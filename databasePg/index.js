const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'ec2-3-19-70-249.us-east-2.compute.amazonaws.com',
  database: 'postgres',
  password: 'jeep2003',
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
