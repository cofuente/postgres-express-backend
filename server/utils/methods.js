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
  console.log('db synced!')

  const result = await Form.findOne({
    where: { stateCode: 'CA' },
    include: {
      model: Question,
      as: 'questions'
    }
  })

  console.log(result)

}

async function runMethodTest() {
  console.log('attempting methods...')
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