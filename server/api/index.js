
const router = require('express').Router()

// For now, we only need routes to GET forms or POST submissions
router.use('/forms', require('./form'))
router.use('/submissions', require('./submission'))

module.exports = router