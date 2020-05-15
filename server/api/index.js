
const router = require('express').Router()

// Ultimately, the client will only need routes to GET forms or POST submissions
router.use('/forms', require('./form'))
router.use('/submissions', require('./submission'))

// additional routes for testing
router.use('/questions', require('./question'))


module.exports = router