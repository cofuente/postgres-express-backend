const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const session = require('express-session')
// const { User } = require('./db/models')

// /* "Enhancing" middleware (does not send response, server-side effects only) */
// app.use(session({
//   // this mandatory configuration ensures that session IDs are not predictable
//   secret: 'SunnyB3aches', // or whatever you like
//   // this option says if you haven't changed anything, don't resave. It is recommended and reduces session concurrency issues
//   resave: false,
//   // this option says if I am new but not modified still save
//   saveUninitialized: true 
// })) // this gives us req.session!

// app.use(function (req, res, next) {
//   if (!req.session.counter) req.session.counter = 0
//   console.log('counter', ++req.session.counter) // increment THEN log
//   next() // needed to continue through express middleware
// })

// app.use(function (req, res, next) {
//   console.log('SESSION USER: ', req.user && req.user.id)
//   next()
// })


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