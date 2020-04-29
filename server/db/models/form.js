const Sequelize = require('sequelize')

const db = require('../_db')

const Form = db.define('form', {
  formUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  stateCode: {
    // expand this list accordingly
    type: Sequelize.ENUM('NY', 'CA')
  },
})

module.exports = Form