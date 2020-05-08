const router = require('express').Router()

const { Submission } = require('../db/models')

router.param('id', (req, res, next, id) => {
  Submission.findById(id)
    .then(submission => {
      if (!submission) throw HttpError(404)
      req.requestedSubmission = submission
      next()
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Submission.create(req.body)
  .then(submission => res.status(201).json(submission))
  .catch(next)
})

module.exports = router