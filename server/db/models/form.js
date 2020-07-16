const Sequelize = require('sequelize')
const db = require('../_db')

const Form = db.define('form', {
  formUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  stateCode: {
    // expand this list to include other state codes
    type: Sequelize.ENUM('NY', 'CA'),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
Form.getQuestions = async (formUUID) => {
  const formWithQs = await Form.findOne({ where: {formUUID}, include:{ model: db.model('question')}})
  const questions = formWithQs.dataValues.questions.map((question) => question.questionUUID)
  return questions
}

Form.prototype.assimilateForm = async function (otherFormUUID) {
  const questionsToAdd = await Form.getQuestions(otherFormUUID)
  return this.addQuestions(questionsToAdd)
}

module.exports = Form