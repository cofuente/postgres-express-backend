const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const app = express()


app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/* "Responding" middleware (may send a response back to client) */
app.use('/api', require('./api'))

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal Error')
})

module.exports = app