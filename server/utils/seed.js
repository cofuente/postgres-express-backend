'use strict'

const db = require('../db/_db')
const chalk = require('chalk')
const {Form, Question, Answer, Submission, QuestionForm} = require('../db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const questions = await Promise.all([
    Question.create({
      // Note the UUID's we are pre-assigning our two basic questions here. These strings are not necessary to add questions to the database as Sequelize automatically generates unique UUID's for every new question, but we are making an exception here so that we may refer to that unique Question model instance by its primary key. We will pass these primary keys into various forms' addQuestion() methods later.
      questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
      required: 'true',
      questionType: 'checkbox',
      questionPrompt: 'Do you solemnly swear to the best of your knowledge that all of these answers are correct?',
      possibleAnswers: [
        'checked'
      ]
    }),
    Question.create({
      questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
      questionType: 'multiplechoice',
      questionPrompt: 'What is the airspeed velocity of an unladen swallow?',
      possibleAnswers: [
        'Depends. Are you referring to the African unladen swallow?',
        'Or the European unladen swallow?'
      ]
    })
  ])
  console.log(`seeded ${questions.length} basic questions`)
  const forms = await Promise.all([
    Form.create({
        formUUID: 'b52e2f5f-763b-4e63-9124-0e707ea73f61',
        title: 'example form title 1',
        stateCode: 'NY',
        questions: [
          {
            questionType: 'input',
            questionPrompt: 'What is your first name?',
            questionsforms: {
              order: 1
            }
          },
          {
            questionType: 'paragraph',
            questionPrompt: 'What is your address?',
            questionsforms: {
              order: 2
            }
          }
        ]
      }, { 
        include: [ Question ] 
      }
    ).then(
      (form) => form.addQuestions([
        '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        '1ac4b921-0568-4fcc-af89-bf46b64f4068'
      ])
    ),
    Form.create({
      formUUID: 'e2ef8eca-d2cf-4e12-816e-8a970fc698e8',
      title: 'this is the form we are going to delete',
      stateCode: 'NY',
    }, { 
      include: [ Question ] 
    }
  ).then(
    (form) => form.addQuestions([
      '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
      '1ac4b921-0568-4fcc-af89-bf46b64f4068'
    ])
  ),
    Form.create({
        formUUID: '63a60c48-adda-468c-b6cc-3449d68f617d',
        title: 'example form title 2',
        stateCode: 'CA',
        questions: [
          {
            questionType: 'multiplechoice',
            questionPrompt: 'What is your gender?',
            possibleAnswers: [
              'male-ish',
              'female-ish',
              'NB',
              'HAHAHAHA!'
            ],
            questionsforms: {
              order: 1
            }
          }, 
        ]
      }, {
        include: [ Question ]
      }
    ).then(
      (form) => form.addQuestions([
        '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        '1ac4b921-0568-4fcc-af89-bf46b64f4068'
      ])
    ),
  ])
  console.log(`seeded ${forms.length} form examples`)
  const submissions = await Promise.all([
    Form.findOne({
        where: {
          stateCode: 'CA'
        }
      }).then(
      (form) => {
        const uuidFound = form['dataValues']['formUUID']
        return Submission.create({
          formUUID: `${uuidFound}`,
          answers: [{
              questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
              value: 'checked'
            }, {
              questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
              value: 'Or the European unladen swallow?',
            }
          ]
        }, {
          include: [ Answer ]
        })
      }
    ),
    Form.findOne({
      where: {
        stateCode: 'CA'
      }
      }).then(
      (form) => {
        const uuidFound = form['dataValues']['formUUID']
        return Submission.create({
          formUUID: `${uuidFound}`,
          answers: [{
              questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
              value: 'checked'
            }, {
              questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
              value: 'Depends. Are you refering to the African unladen swallow?',
            }
          ]
        }, {
          include: [ Answer ]
        })
      }
    ),
    Form.findOne({
      where: {
        title: 'example form title 1'
      }
      }).then(
      (form) => {
        const uuidFound = form['dataValues']['formUUID']
        return Submission.create({
          formUUID: `${uuidFound}`,
          answers: [
            {
              questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
              value: 'checked'
            }, {
              questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
              value: 'Depends. Are you refering to the African unladen swallow?',
            }
          ]
        }, {
          include: [ Answer ]
        })
      }
    )
  ])
  console.log(`seeded ${submissions.length} individual form submissions`)
  const orderedForms = await Promise.all([
    QuestionForm.update({order: 1 }, {
      where: {
        questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        formUUID: 'e2ef8eca-d2cf-4e12-816e-8a970fc698e8'
      }
    }),
    QuestionForm.update({order: 2 }, {
      where: {
        questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
        formUUID: 'e2ef8eca-d2cf-4e12-816e-8a970fc698e8'
      }
    }),
    QuestionForm.update({order: 3 }, {
      where: {
        questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        formUUID: 'b52e2f5f-763b-4e63-9124-0e707ea73f61'
      }
    }),
    QuestionForm.update({order: 4 }, {
      where: {
        questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
        formUUID: 'b52e2f5f-763b-4e63-9124-0e707ea73f61'
      }
    }),
    QuestionForm.update({order: 2 }, {
      where: {
        questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        formUUID: '63a60c48-adda-468c-b6cc-3449d68f617d'
      }
    }),
    QuestionForm.update({order: 3 }, {
      where: {
        questionUUID: '1ac4b921-0568-4fcc-af89-bf46b64f4068',
        formUUID: '63a60c48-adda-468c-b6cc-3449d68f617d'
      }
    }),
  ])
  console.log(chalk.blue('ɴᴇᴡ ') + ' → sorted all forms to have ordered questions')
  console.log(chalk.green('seeded successfully!'))
}

// Separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('🌱 seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// Exporting the seed function for testing purposes
module.exports = seed