const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalkAnimation = require('chalk-animation')
const PORT = process.env.PORT || 1337
const { db } = require('./db/models')
const server = express()

// logging middleware
server.use(volleyball)

// body parsing middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

// api routes
server.use('/api', require('./api'))

// error handling endware
server.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const bootServer = async () => {
  try {
    await db.sync()
    await server.listen(PORT)
  } catch (err) {
    console.error(err)
  }
}

bootServer()
