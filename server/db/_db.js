
const Sequelize = require('sequelize')
const { Client } = require('pg')

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// })

// client.connect()

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row))
//   }
//   client.end()
// })

const dbName = 'pebe'

/* https://sequelize.org/v5/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor */


// Passing a connection URI
const db = new Sequelize( process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
  define: {
    timestamps: true,
  },
  logging: false
})

module.exports = db