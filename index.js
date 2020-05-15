const app = require('./server')
const PORT = process.env.PORT || 1337
const { db } = require('./server/db/models')


const init = async () => {
  if (require.main === module){
    //will only run when run with npm start and not with npm test to avoid db syncing in multiple threads when running tests
    try {
			await db.sync()
			console.log('The postgres server is up and running - maybe you should go catch it!')
      app.listen(PORT, () => {
        console.log(`Your server kindly awaits your attention on port ${PORT}`)
      })
    } catch (err) {
      console.error(err)
    }
  }
}

init()