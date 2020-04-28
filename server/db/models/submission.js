const Sequelize = require('sequelize')

const db = require('../_db')

const Submission = db.define('submission', {
  submissionUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1, // or Sequelize.UUIDV4, this is to make sequelize generate the ids automatically
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