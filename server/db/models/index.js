
const db = require('../_db')
const Question = require('./question')
const Answer = require('./answer')
const Form = require('./form')
const Submission = require('./submission')


Answer.belongsTo(Question, {
  foreignKey: 'questionId',
  allowNull: false
}) // provides answer.getQuestion() method on all answer instances

Form.hasMany(Question) // lets you do form.getQuestions()

Answer.belongsTo(Submission, {
  foreignKey: 'submissionId', // test if UUID also works
  allowNull: false
})

module.exports = {
	db,
	Question,
  Answer,
  Form,
  Submission
}