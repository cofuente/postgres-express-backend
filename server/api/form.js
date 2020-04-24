const router = require('express').Router()

// const HttpError = require('../utils/HttpError')
const { Form, Question } = require('../db/models')

router.param('id', (req, res, next, id) => {
  Form.findById(id)
    .then(form => {
      if (!form) throw HttpError(404)
      req.requestedForm = form
      next()
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Form.findAll()
    .then(forms => res.json(forms))
    .catch(next)
})

// router.post('/', (req, res, next) => {
//   User.create(req.body)
//     .then(user => res.status(201).json(user))
//     .catch(next)
// })

// router.get('/:id', (req, res, next) => {
//   req.requestedUser.reload(User.options.scopes.populated())
//     .then(requestedUser => res.json(requestedUser))
//     .catch(next)
// })

// router.put('/:id', (req, res, next) => {
//   req.requestedUser.update(req.body)
//     .then(user => res.json(user))
//     .catch(next)
// })

// router.delete('/:id', (req, res, next) => {
//   req.requestedUser.destroy()
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

module.exports = router