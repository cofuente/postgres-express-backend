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