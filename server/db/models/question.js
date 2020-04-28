const Sequelize = require('sequelize')

const db = require('../_db')

const Question = db.define('question', {
  questionUUID: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4, // or Sequelize.UUIDV4, this is to make sequelize generate the ids automatically
    unique: true
  },
  questionType: {
    type: Sequelize.ENUM(
      'multiplechoice',
      'checkbox',
      'paragraph',
      'input'), // for purposes of rendering the form accordingly in the front end
    allowNull: false,
  },
  questionPrompt: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  possibleAnswers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'n/a'
    ]
  }
})

module.exports = Question

/* // It is possible to create foreign keys:
  bar_id: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Bar,

      // This is the column name of the referenced model
      key: 'id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
    }
  }, */