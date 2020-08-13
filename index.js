const chalkAnimation = require('chalk-animation')
const PORT = process.env.PORT || 1337
// TODO: figure out a way to resolve the serving of separate fe/be ports
const server = require('./server')
const { db } = require('./server/db/models')
const nextDistroEnrollmentForm = require('./client/utils/data.js')
  
// TODO: possibly add require.main = module condition
// Initialize server 
const init = async () => {
  if (require.main === module){
    try {
			await db.sync()
      chalkAnimation.radar('The postgres server is up and running - maybe you should go catch it!', 2.58)
      setTimeout(() => {
        server.listen(PORT, () => {
          chalkAnimation.neon(`Your server kindly awaits your attention on port ${PORT}`)
        })
      }, 1800)
    } catch (err) {
      console.error(err)
    }
  }
}

init()
