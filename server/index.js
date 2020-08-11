const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const server = express()


server.use(volleyball)
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

/* "Responding" middleware (may send a response back to client) */
server.use('/api', require('./api'))

server.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal Error')
})

module.exports = server