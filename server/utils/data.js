
const questionData = [
  {
    // Note the UUID's we are pre-assigning our two basic questions here. These strings are not necessary to add questions to the database as Sequelize automatically generates unique UUID's for every new question, but we are making an exception here so that we may refer to that unique Question model instance by its primary key. We will pass these primary keys into various forms' addQuestion() methods later.
    questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
    required: 'true',
    questionType: 'checkbox',
    questionPrompt: 'Do you solemnly swear to the best of your knowledge that all of these answers are correct?',
    possibleAnswers: [
      'checked'
    ]
  },
  {
    questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
    questionType: 'multiplechoice',
    questionPrompt: 'What is the airspeed velocity of an unladen swallow?',
    possibleAnswers: [
      'Depends. Are you referring to the African unladen swallow?',
      'Or the European unladen swallow?'
    ]
  }
]


module.exports = questionData
