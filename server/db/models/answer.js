const Sequelize = require('sequelize')

const db = require('../_db')

const Answer = db.define('answer', {
  answerUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1, // or Sequelize.UUIDV4, this is to make sequelize generate the ids automatically
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