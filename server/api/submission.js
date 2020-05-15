const router = require('express').Router()

const { Submission, Answer } = require('../db/models')

// form is filled and a new submission is created
// requires formUUID & answers array
router.post('/', async (req, res, next) => {
  try {
    const newSubmission = await Submission.create(req.body, {
      include: [ Answer ]
    })
    if (newSubmission) res.status(201).json(newSubmission)
    else res.status(500).send('Something went wrong')
  } catch (error) {
    next(error)
  } 
})

// TODO: consider writing an emergency delete all submissions route that will also delete answers

module.exports = router