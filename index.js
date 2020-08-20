const path = require('path')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const express = require('express')
const { db } = require('./server/db/models')
const logger = require('./server/utils/logger')
const PORT = process.env.PORT || 1337
const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? `http://localhost:${PORT}` : 'https://postgress-express-backend.herokuapp.com'
const fullStack = express()
<<<<<<< HEAD
=======

const postFormattedData = require('./client/utils/submission.js')

>>>>>>> b048e1fc5228752a4a688b84d044fe93b10dd16e
const buildStack = async () => {
  // logging middleware
  fullStack.use(logger)

  // body parsing middleware
  fullStack.use(bodyParser.json())
  fullStack.use(bodyParser.urlencoded({extended: true}))

  // api routes
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
const postFormattedData = require('./client/utils/submission.js')

const bootServer = async () => {
  try {
    await db.sync()
    console.log(chalk.green(`Postgres server is up and running!`))
    await fullStack.listen(PORT)
    console.log(chalk.blue(`API listening on port:${PORT}`))
  } catch (err) {
    console.error(err)
  }
}

const serveClient = async () => {
  const nextDistroEnrollmentForm = require('./client/utils/data.js')
  try {
    await fullStack.get('/', (req, res) => {
      nextDistroEnrollmentForm.data.then( (data) => res.status(200).render('index', {data}))
    })
    .post('/', function(req,res){
      var data = req.body;
      postFormattedData(data)
    })    
    console.log(chalk.magenta(`Client awaits at ${current}`))
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