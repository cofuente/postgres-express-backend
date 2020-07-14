const Sequelize = require('sequelize')

const db = require('../_db')

const QuestionForm = db.define('questionsforms', {
  order: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false
})

module.exports = QuestionForm