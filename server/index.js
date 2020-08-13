const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalkAnimation = require('chalk-animation')
const PORT = process.env.PORT || 1337
const { db } = require('./db/models')
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
const bootServer = async () => {
  try {
    await db.sync()
    chalkAnimation.radar('The postgres server is up and running - maybe you should go catch it!', 2.58)
    setTimeout(() => {
      server.listen(PORT, () => {
        chalkAnimation.neon(`Your server kindly awaits your attention on port ${PORT}`)
      })
    }, 1800)
  } catch (err) {
    console.error(err)
  }
}

bootServer()

module.exports = {
	server,
  bootServer,
  PORT
}