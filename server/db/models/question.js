const Sequelize = require('sequelize')

const db = require('../_db')

const Question = db.define('question', {
  questionUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  questionPrompt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  questionType: {
    type: Sequelize.ENUM(
      'multiplechoice',
      'checkbox',
      'paragraph',
      'input'
      ),
    allowNull: false,
  },
  possibleAnswers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'n/a'
    ]
  },
}, {
  timestamps: false
})

module.exports = Question