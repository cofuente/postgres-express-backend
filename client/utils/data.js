var axios = require('axios');
const chalkAnimation = require('chalk-animation')

const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? 'http://localhost:1337' : 'https://postgress-express-backend.herokuapp.com'
let formUUID;

if (current === "http://localhost:1337") {
  formUUID = "181dd752-4cd8-46ea-b4ba-20f18576f568"
} else {
  formUUID = "eeae34c5-de07-4e1a-8402-602f158ca0a1"
}


module.exports.data = axios.get(`${current}/api/forms/${formUUID}`)
  .then(response => {
    let form = response.data
    chalkAnimation.karaoke('The frontend has successfully loaded data from the API')
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

