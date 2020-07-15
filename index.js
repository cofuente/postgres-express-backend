const app = require('./server')
const api = require('./data.js')
const PORT = process.env.PORT || 1337
const { db } = require('./server/db/models')
const chalkAnimation = require('chalk-animation')
const express = require('express')
const path = require('path')
const frontend = new express();
const cors = require('cors')

frontend.use(cors())
frontend.use(express.json());
frontend.use(express.urlencoded({ extended: true }))

/*
frontend.get('/', function(req,res){
  res.status(200)
    .json(data);
});
*/

frontend.post('/', function(req,res){
  var data = req.body;
  console.log(data);
});

// index page
frontend.use('/', express.static('client/public'));

// test form in jade
frontend.use(express.static(path.join(__dirname, 'client/src/jade/next-distro-fe/')))
  .set('views', path.join(__dirname, '/client/src/jade/next-distro-fe/'))
  .set('view engine', 'jade')
  .get('/test', function (req, res) {
    api.data.then(data=>{
      console.log(data);
      res.status(200).render('test', {data})
    }).catch(e=>{
      console.log(e)
    })
  })
  .listen(9000, () => console.log(`Listening on ${ 9000 }`))
  
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
