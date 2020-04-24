
const router = require('express').Router()

router.use('/forms', require('./form'))

// router.use('/questions', require('./question'))

module.exports = router