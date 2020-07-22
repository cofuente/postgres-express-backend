'use strict'

const db = require('../db/_db')
const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const {Form, Question, Answer, Submission, QuestionForm} = require('../db/models')
const questionData = require('./data')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  const questionsArr = questionData.map((x)=>Question.create(x))
  const questions = await Promise.all(questionsArr)
  console.log(`seeded ${questions.length} basic questions`)
  
  const forms = await Promise.all([
    Form.create({
        title: 'Secure Enrollment for NEXT Distro\'s Mail-based Harm Reduction Program',
        stateCode: 'NY',
      }, {
        include: [ Question ]
      }
    ),
  ])

  console.log(`seeded ${forms.length} form examples`)
  console.log(`seeded successfully`)
}

// Separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('🌱 running seed')
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