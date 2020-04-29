
const db = require('../_db')
const Question = require('./question')
const Answer = require('./answer')
const Form = require('./form')
const Submission = require('./submission')


Question.belongsToMany(Form, {
  through: 'questionsforms',
  foreignKey: 'questionUUID'
})
Form.belongsToMany(Question, {
  through: 'questionsforms',
  foreignKey: 'formUUID'
})

Submission.belongsTo(Form, { foreignKey: 'formUUID' })
  
Answer.belongsTo(Question, { foreignKey: 'questionUUID' })
  
Submission.hasMany(Answer, { foreignKey: 'submissionUUID' })

module.exports = {
	db,
	Question,
  Answer,
  Form,
  Submission,
}