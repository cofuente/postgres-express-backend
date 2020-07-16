
const db = require('../_db')
const Question = require('./question')
const Answer = require('./answer')
const Form = require('./form')
const Submission = require('./submission')
const QuestionForm = require('./questionform')


Question.belongsToMany(Form, {
  through: QuestionForm,
  foreignKey: 'questionUUID'
})
Form.belongsToMany(Question, {
  through: QuestionForm,
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
  QuestionForm
}