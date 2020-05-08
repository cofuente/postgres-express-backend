const router = require('express').Router()

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

module.exports = router