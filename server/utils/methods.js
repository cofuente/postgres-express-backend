/* eslint-disable no-undef */
'use strict'

const db = require('../db/_db')
const {
  Form,
  Question,
  // Answer,
  // Submission
} = require('../db/models')

async function methodTest() {
  await db.sync()
  console.log('DB Synced!')
  try {
    const questionsBefore = await Form.getQuestions('e2ef8eca-d2cf-4e12-816e-8a970fc698e8')
    console.log('before: ', questionsBefore)

    const formToUpdate = await Form.findByPk('e2ef8eca-d2cf-4e12-816e-8a970fc698e8')
    // /* ------ the method I'm actually testing ------*/
    await formToUpdate.assimilateForm('7c21fb1c-88cc-43ea-be7b-5a621955a3ea')

    const questionsAfter = await Form.getQuestions('e2ef8eca-d2cf-4e12-816e-8a970fc698e8')
    console.log('after: ', questionsAfter)
  } catch (error) {
    console.log('eeeeeeeeee:', error)
  }
}

async function runMethodTest() {
  console.log('attempting methodTest...')
  try {
    await methodTest()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runMethodTest()
}

module.exports = methodTest