const chalkAnimation = require('chalk-animation')
const express = require('express')
const path = require('path')
const cors = require('cors')
// TODO: figure out a way to resolve the serving of separate fe/be ports
const frontend = new express();
const nextDistroEnrollmentForm = require('./utils/data.js')

frontend.use(cors())
frontend.use(express.json());
frontend.use(express.urlencoded({ extended: true }))

// Serve Jade files 
frontend.use(express.static(path.join(__dirname, './src/jade/next-distro-fe/')))
  .set('views', path.join(__dirname, './src/jade/next-distro-fe/'))
  .set('view engine', 'jade')
  .get('/', function (req, res) {
    nextDistroEnrollmentForm.data.then(data=>{
      res.status(200).render('index', {data})
    }).catch(e =>{
      console.log(e)
    })
  })
  .listen(9000, () => {
    setTimeout(() => chalkAnimation.pulse(`Web client is listening on ${ 9000 }`), 3580) 
  })

// Serve static files
frontend.use('/static', express.static('client/public/'));