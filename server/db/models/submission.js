const Sequelize = require('sequelize')

const db = require('../_db')

const Submission = db.define('submission', {
  submissionUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    unique: true
  },
  timeSubmitted: {
    type: Sequelize.DATE,
    allowNull: false
  }
// }, {                                    bring in all answers with the matching submissionId, possibly include questions as well
//   scopes: {
//     populated: () => ({
//       include: [{
//         model: db.model('answer'),
//         attributes: {exclude: ['potentialAnswers']}
//       }]
//     })
//   }
})

module.exports = Submission