var axios = require('axios');
const chalkAnimation = require('chalk-animation')

const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? 'http://localhost:1337' : 'https://postgress-express-backend.herokuapp.com'

module.exports = axios.get(`${current}/api/questions`)
  .then(response => {
    let form = response.data
    chalkAnimation.karaoke('The frontend has successfully loaded data from the API')
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

