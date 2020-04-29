
const Sequelize = require('sequelize')

const dbName = 'pebe'

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  define: {
    timestamps: true,
  },
  logging: false
})

module.exports = db