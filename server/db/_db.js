
const Sequelize = require('sequelize')

const dbName = 'pebe'

/* https://sequelize.org/v5/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor */


console.log(process.env.DATABASE_URL, '<---------')
// Passing a connection URI
const db = new Sequelize( process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
  define: {
    timestamps: true,
  },
  logging: false
})

module.exports = db