'use strict'

const db = require('../db/_db')
const {Form, Question, Answer, Submission} = require('../db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const questions = await Promise.all([
    Question.create({
      // questionUUID: 
      questionType: 'multiplechoice',
      questionPrompt: 'what is your gender?',
      possibleAnswers: [
        'male-ish',
        'female-ish',
        'NB',
        'HAHAHAHA!'
      ]
    }),
    Question.create({
      // questionUUID: 
      questionType: 'input',
      questionPrompt: 'what is your name?',
    }),
    Question.create({
      // questionUUID: 
      questionType: 'paragraph',
      questionPrompt: 'what is your address?',
    }),
    Question.create({
      // questionUUID: 
      questionType: 'checkbox',
      questionPrompt: 'do you verify your answers in this form are all true to the best of your knowledge?',
      possibleAnswers: [
        'checked']
    }),
  ])

  console.log(`seeded ${questions.length} questions`)
  // console.log(`seeded ${forms.length} forms`)
  // console.log(`seeded ${users.length} users`)
  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
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

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed