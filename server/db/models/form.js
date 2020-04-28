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
    // later wanna make this one of various state codes, add validations, etc
    type: Sequelize.ENUM('NY', 'CA')
  },
// }, {                      bring in all questions for a specified form, also consider bringing in all submissions to this form
//   scopes: {
//     populated: () => ({
//       include: [{
//         model: db.model('question'),
//         attributes: {exclude: ['potentialAnswers']}
//       }]
//     })
//   }
})

module.exports = Form