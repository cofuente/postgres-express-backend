const router = require('express').Router()

// const HttpError = require('../utils/HttpError')
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

// router.get('/', (req, res, next) => {
//   Submission.findAll()
//     .then(submissions => res.json(submissions))
//     .catch(next)
// })

// router.get('/:id', (req, res, next) => {
//   req.requestedSubmission.reload(Submission.options.scopes.populated())
//     .then(requestedSubmission => res.json(requestedSubmission))
//     .catch(next)
// })

// router.put('/:id', (req, res, next) => {
//   req.requestedSubmission.update(req.body)
//     .then(submission => res.json(submission))
//     .catch(next)
// })

// router.delete('/:id', (req, res, next) => {
//   req.requestedSubmission.destroy()
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

module.exports = router