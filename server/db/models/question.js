const Sequelize = require('sequelize')

const db = require('../_db')

const Question = db.define('question', {
  questionUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1, // or Sequelize.UUIDV4, this is to make sequelize generate the ids automatically
    unique: true
  },
  textPrompt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  possibleAnswers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: []
  }
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('form'),
        as: 'region'
      }]
    })
  }
})

module.exports = Question