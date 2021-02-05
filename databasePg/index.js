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











  // return new Promise(function(resolve, reject) {
  //   pool.query('SELECT * FROM sdcproducts', (error, results) => {
  //     if (error) {
  //       reject(error)
  //     }
  //     console.log(results,' results')
  //     console.log(results.rows,'rows')
  //     resolve('hello');
  //   })
  // })



// const createMerchant = (body) => {
//   return new Promise(function(resolve, reject) {
//     const { name, email } = body
//     pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`A new merchant has been added added: ${results.rows[0]}`)
//     })
//   })
// }

// const deleteMerchant = () => {
//   return new Promise(function(resolve, reject) {
//     const id = parseInt(request.params.id)
//     pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Merchant deleted with ID: ${id}`)
//     })
//   })
// }