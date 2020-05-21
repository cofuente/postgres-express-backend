
const router = require('express').Router()

// Ultimately, I forsee the client only needing endpoints to GET forms or POST submissions
router.use('/forms', require('./form'))
router.use('/submissions', require('./submission'))

// If we create some kind of admin-access client for this, we'll certainly need more endpoints
router.use('/questions', require('./question'))


module.exports = router