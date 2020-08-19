const path = require('path')
const chalk = require('chalk')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const express = require('express')
const PORT = process.env.PORT || 1337
const { db } = require('./server/db/models')
const fullStack = express()

const buildStack = async () => {
  // logging middleware
  fullStack.use(volleyball)

  // body parsing middleware
  fullStack.use(bodyParser.json())
  fullStack.use(bodyParser.urlencoded({extended: true}))

  // mounting backEnd to fullStack
  fullStack.use('/api', require('./server/api'))
  
  // serve Jade files 
  fullStack.use(express.static(path.join(__dirname, './client/src/jade/next-distro-fe/')))
  fullStack.set('views', path.join(__dirname, './client/src/jade/next-distro-fe/'))
  fullStack.set('view engine', 'jade')
  
  // serve static files
  fullStack.use('/static', express.static('./client/public/'))

  // error handling endware
  fullStack.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const bootServer = async () => {
  try {
    await db.sync()
    await fullStack.listen(PORT)
    console.log(chalk.blue(`Server listening on port:${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

const serveClient = async () => {
  const nextDistroEnrollmentForm = require('./client/utils/data.js')
  try {
    await fullStack.get('/', (req, res) => {
      nextDistroEnrollmentForm.then( data => res.status(200).render('index', {data}))
    })
    console.log(chalk.magenta(`Client awaits at http://localhost:${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

async function bootFullStack() {
  // TODO: possibly add require.main = module condition for testing purposes
  await buildStack()
  await bootServer()
  await serveClient()
}

bootFullStack()