const router = require('express').Router()

// const HttpError = require('../utils/HttpError')
const { Form } = require('../db/models')

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
//   Form.create(req.body)
//     .then(form => res.status(201).json(form))
//     .catch(next)
// })

// router.get('/:id', (req, res, next) => {
//   req.requestedForm.reload(Form.options.scopes.populated())
//     .then(requestedForm => res.json(requestedForm))
//     .catch(next)
// })

// router.put('/:id', (req, res, next) => {
//   req.requestedForm.update(req.body)
//     .then(form => res.json(form))
//     .catch(next)
// })

// router.delete('/:id', (req, res, next) => {
//   req.requestedForm.destroy()
//     .then(() => res.sendStatus(204))
//     .catch(next)
// })

module.exports = router