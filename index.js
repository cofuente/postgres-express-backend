const path = require('path')
const chalkAnimation = require('chalk-animation')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const express = require('express')
const PORT = process.env.PORT || 1337
const { db } = require('./server/db/models')
const fullStack = express()

const buildStack = async () => {
  
  // serve Jade files 
  fullStack.use(express.static(path.join(__dirname, './client/src/jade/next-distro-fe/')))
  fullStack.set('views', path.join(__dirname, './client/src/jade/next-distro-fe/'))
  fullStack.set('view engine', 'jade')
  
  // serve static files
  fullStack.use('/static', express.static('./client/public/'))
  
  const backEnd = express()
  backEnd.use('/', require('./server/api'))

  // logging middleware
  backEnd.use(volleyball)
  
  // body parsing middleware
  backEnd.use(bodyParser.json())
  backEnd.use(bodyParser.urlencoded({extended: true}))
  
  // error handling endware
  backEnd.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })

  // api routes
  fullStack.use('/api', backEnd)

  // error handling endware
  fullStack.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const bootServer = async () => { // TD: make sure th animated logs aren't blocking the logging middlewares, try moving animated logs to a parent app? https://expressjs.com/en/4x/api.html#app.use or https://expressjs.com/en/4x/api.html#app.enable
  try {
    await db.sync().then(chalkAnimation.rainbow('The postgres server is up and running - maybe you should go catch it!'))
    await fullStack.listen(PORT, () => chalkAnimation.neon(`Your server kindly awaits your attention on port ${PORT}`))
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