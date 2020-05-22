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
    // expand this list to include other state codes
    type: Sequelize.ENUM('NY', 'CA'),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
})

module.exports = Form