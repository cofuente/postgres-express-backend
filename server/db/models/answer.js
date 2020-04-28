const Sequelize = require('sequelize')

const db = require('../_db')

const Answer = db.define('answer', {
  answerUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  value: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
}, {
  scopes: { // brings in question attributes w/ matching questionId
    populated: () => ({
      include: [{
        model: db.model('question'),
        attributes: {exclude: ['potentialAnswers']}
      }]
    })
  }
})

module.exports = Answer