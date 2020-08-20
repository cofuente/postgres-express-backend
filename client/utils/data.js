var axios = require('axios');
const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? 'http://localhost:1337' : 'https://postgress-express-backend.herokuapp.com'
let formUUID;

module.exports.data = axios.get(`${current}/api/forms/${formUUID}`)
  .then(response => {
    let form = response.data
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

