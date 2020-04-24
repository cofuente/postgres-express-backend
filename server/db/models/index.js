
const db = require('../_db')

const Question = require('./question')
const Form = require('./form')

Form.hasMany(Question, {
  foreignKey: 'region_id',
  onDelete: 'cascade', // remove all associated stories
  hooks: true // makes the cascade actually work. Yay Sequelize!
})

Question.belongsTo(Form, {as: 'region'})

module.exports = {
	db,
	Question,
	Form
}