const Sequelize = require('sequelize')

const db = require('../_db')

const Form = db.define('form', {
  state: {
    // later wanna make this one of various state codes, add validations, etc
    type: Sequelize.ENUM('NY', 'CA')
  },
  formUUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1, // or Sequelize.UUIDV4, this is to make sequelize generate the ids automatically
    unique: true
  },
  // photo: {
  //   type: Sequelize.STRING,
  //   defaultValue: '/images/default-photo.jpg'
  // },
  // phone: Sequelize.STRING,
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true
  // },
  // password: Sequelize.STRING,
  // isAdmin: {
  //   type: Sequelize.BOOLEAN,
  //   defaultValue: false
  // },
  // googleId: Sequelize.STRING,
  // githubId: Sequelize.STRING,
  // twitterId: Sequelize.STRING
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('question'),
        attributes: {exclude: ['potentialAnswers']}
      }]
    })
  }
})

module.exports = Form