const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const PORT = process.env.PORT || 1337
const { db } = require('./db/models')
const morganConfig = require('./utils/morganConfig')
const server = express()

// logging middleware
server.use(morgan(morganConfig))

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
console.log(chalk.black.bgBlueBright('Server is up and running'))
  } catch (err) {
    console.error(err)
  }
}

bootServer()
