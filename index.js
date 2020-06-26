const app = require('./server')
const PORT = process.env.PORT || 1337
const { db } = require('./server/db/models')
const chalkAnimation = require('chalk-animation')
const express = require('express')
const path = require('path')
const frontend = new express();
const cors = require('cors')
var axios = require('axios');

const axios = require('axios');

const data'

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    data = response;
  })
  .catch(error => {
    console.log(error);
  });


frontend.use(cors())
frontend.use(express.json());
frontend.use(express.urlencoded({ extended: true }))

frontend.get('/', function(req,res){
  res.status(200)
    .json(data);
});

frontend.post('/', function(req,res){
  var data = req.body;
  console.log(data);
});

frontend.use('/home', express.static('views'));
frontend.listen(9000);

var users = [{
  name: "Mohawk",
  id: 0
  },{
    name: "Greene",
    id: 1
  }]

frontend.route('/users')
  .get(function(req,res){
      res.status(200).json(users)
  })
  .post(function(req,res){
      users.push(req.body)
  })

frontend.route('/users/:id')
  .get(function(req,res){
    console.log(req.params)
    var user = users.filter(function(user){
      return +user.id === +req.params.id
    })[0];
    if (user){
      res.status(200).json(user);
    }
    if (!user) {
      res.status(200).send();
    }
  })
  .patch(function(req,res){
    var user = users.filter(function(user){
      return +user.id === +req.params.id
    })[0];
    var params = req.params
    for (key in params) {
      user[key] = params[key];
    }
  })
  delete(function(){})

const init = async () => {
  if (require.main === module){
    //will only run when run with npm start and not with npm test to avoid db syncing in multiple threads when running tests
    try {
			await db.sync()
      chalkAnimation.radar('The postgres server is up and running - maybe you should go catch it!', 2.58)
      setTimeout(() => {
        app.listen(PORT, () => {
          chalkAnimation.neon(`Your server kindly awaits your attention on port ${PORT}`)
        })
      }, 1800)
    } catch (err) {
      console.error(err)
    }
  }
}

init()
