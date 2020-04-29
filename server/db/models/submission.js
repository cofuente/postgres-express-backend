const Sequelize = require('sequelize')
const db = require('../_db')
const { Form } = require('../models')

const Submission = db.define('submission', {
  submissionUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  formUUID: {
    type: Sequelize.UUID,
    references: {
      model: Form,
      key: 'formUUID'
    },
    allowNull:false
  }
})

module.exports = Submission