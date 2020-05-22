const router = require('express').Router()

const { Question } = require('../db/models')

// get all questions
router.get('', async (req, res, next) => {
  try {
    const allQuestions = await Question.findAll()
    if (allQuestions) res.status(200).json(allQuestions) 
    else res.status(404).send('There are no questions in this database.')
  } catch (error) {
    next(error)
  }
})

// make a new question, requires questionType & questionPrompt
router.post('/', async (req, res, next) => {
  try {
    const newQuestion = await Question.create(req.body)
    if (newQuestion) res.status(201).json(newQuestion)
    else res.status(500).send('Something went wrong')
  } catch (error) {
    next(error)
  } 
})

// get a specific question
router.get('/:questionUUID', async (req, res, next) => {
  try {
    let requestedQuestion = await Question.findByPk(req.params.questionUUID)
    if (requestedQuestion) res.status(200).json(requestedQuestion) 
    else res.status(404).send('question not found')
  } catch (error) {
    next(error)
  }
})

// delete a question
router.delete('/:questionUUID', async (req, res, next) => {
  try {
    await Question.destroy({ where: { questionUUID: req.params.questionUUID } })
    res.status(204).send('deletion complete')
  } catch (error) {
    next(error)
  }
})

module.exports = router