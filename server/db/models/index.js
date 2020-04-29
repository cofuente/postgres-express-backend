
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

// Answer.belongsTo(Question, {
//   foreignKey: 'questionId',
//   allowNull: false
// }) // provides answer.getQuestion() method on all answer instances

// Form.hasMany(Question, { as: 'questionList' }) // lets you do form.getQuestions()

// QuestionsForms.belongsTo(Question, { foreignKey: 'questionUUID' })
// QuestionsForms.belongsTo(Question) 
// QuestionsForms.belongsTo(Form, { foreignKey: 'formUUID' })
// QuestionsForms.belongsTo(Form) 



// Answer.belongsTo(Submission, {
//   foreignKey: 'submissionId', // test if UUID also works
//   allowNull: false
// })

module.exports = {
	db,
	Question,
  Answer,
  Form,
  Submission,
}