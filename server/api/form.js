const router = require('express').Router()

const { Form } = require('../db/models')


// get all forms
// Note: will eventually be deleted, only useful for development
router.get('', async (req, res, next) => {
  try {
    const allForms = await Form.findAll()
    if (allForms) res.status(200).json(allForms) 
    else res.status(404).send('There are no forms in this database.')
  } catch (error) {
    next(error)
  }
})

// make a new form, requires state code
router.post('/', async (req, res, next) => {
  try {
    const newForm = await Form.create(req.body)
    if (newForm) res.status(201).json(newForm)
    else res.status(500).send('Something went wrong')
  } catch (error) {
    next(error)
  } 
})

// get a specific form
// TODO: alter this to include a form's questions
router.get('/:formUUID', async (req, res, next) => {
  try {
    let requestedForm = await Form.findByPk(req.params.formUUID)
    if (requestedForm) res.status(200).json(requestedForm) 
    else res.status(404).send('form not found')
  } catch (error) {
    next(error)
  }
})

// add a question to a form
router.put('/:formUUID', async (req, res, next) => {
  try {
    const formToUpdate = await Form.findByPk(req.params.formUUID)
    formToUpdate.addQuestions(req.body)
    res.status(202).json(formToUpdate.formUUID)
  } catch (error) {
    next(error)
  }
  // req.requestedForm.addQuestions(req.body)
  //   .then(form => res.status(202).json(form))
  //   .catch(next)
})

router.delete('/:formUUID', async (req, res, next) => {
  try {
    await Form.destroy({ where: { formUUID: req.params.formUUID } })
    res.status(204).send()
  } catch (error) {
    next(error)
  }
})

module.exports = router