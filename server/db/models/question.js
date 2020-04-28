const Sequelize = require('sequelize')

const db = require('../_db')

const Question = db.define('question', {
  questionUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1, // or Sequelize.UUIDV4, this is to make sequelize generate the ids automatically
    unique: true
  },
  questionType: {
    type: Sequelize.ENUM('multiplechoice', 'checkbox', 'paragraph'), // for purposes of rendering the form accordingly in the front end
    allowNull: false,
  },
  questionPrompt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  possibleAnswers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: ['']
  }
})

module.exports = Question