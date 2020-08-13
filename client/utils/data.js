var axios = require('axios');
const chalkAnimation = require('chalk-animation')

// TD: fix this environment identifier
const current = process.env.NODE.slice(0,7) !== '/Users/' ? 'http://localhost:1337' : 'https://postgress-express-backend.herokuapp.com'

module.exports.data = axios.get(`${current}/api/questions`)
  .then(response => {
    let form = response.data
    setTimeout(() => chalkAnimation.rainbow('The frontend has successfully loaded data from the API'), 4000)
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

