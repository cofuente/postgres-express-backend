'use strict'

const db = require('../db/_db')
const {Form, Question, Answer, Submission} = require('../db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const questions = await Promise.all([
    Question.create({
      // Note the UUID's we are pre-assigning our two basic questions here. These strings are not necessary to add questions to the database as Sequelize automatically generates unique UUID's for every new question, but we are making an exception here so that we may refer to that unique Question model instance by its primary key. We will pass these primary keys into various forms' addQuestion() methods later.
      questionUUID: '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
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
        'Depends. Are you refering to the African unladen swallow?',
        'Or the European unladen swallow?'
      ]
    })
  ])

  const forms = await Promise.all([
    Form.create(
      {
        stateCode: 'NY',
        questions: [
          {
            questionType: 'input',
            questionPrompt: 'What is your first name?',
          },
          {
            questionType: 'paragraph',
            questionPrompt: 'What is your address?',
          }
        ]
      },
      { 
        include: [Question] 
      }
    )
    .then(
      (form) => form.addQuestions([
        '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        '1ac4b921-0568-4fcc-af89-bf46b64f4068'
      ])
    ),
    Form.create(
      {
        stateCode: 'CA',
        questions: [
          {
            questionType: 'multiplechoice',
            questionPrompt: 'what is your gender?',
            possibleAnswers: [
              'male-ish',
              'female-ish',
              'NB',
              'HAHAHAHA!'
            ]
          }
        ]
      }, 
      {
        include: [Question]
      }
    )
    .then(
      (form) => form.addQuestions([
        '73c7ed89-8c6f-4e6e-8d19-ca0250b37cb0',
        '1ac4b921-0568-4fcc-af89-bf46b64f4068'
      ])
    ),
  ])

  // const answers = await 
  
  console.log(`seeded ${questions.length} basic questions`)
  console.log(`seeded ${forms.length} form examples`)

  // console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  // const result = await Form.findOne({
  //   where: { stateCode: 'CA' },
  //   include: {
  //     model: Question,
  //     as: 'questions'
  //   }
  // })
  // console.log(`attempting eager loading below`)
  // // console.log(result)
  // const q0 = result['dataValues']['questions'][0]['dataValues']['questionPrompt']
  // const q1 = result['dataValues']['questions'][1]['dataValues']['questionPrompt']
  // // const q2 = result['dataValues']['questions'][2]['dataValues']['questionPrompt']


  // // console.log(q0,q1,q2)
  // console.log(q0,q1)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
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

// we export the seed function for testing purposes
module.exports = seed