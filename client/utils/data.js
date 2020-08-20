var axios = require('axios');
const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? 'http://localhost:1337' : 'https://postgress-express-backend.herokuapp.com'
let formUUID;

if (current === "http://localhost:1337") {
  formUUID = "78d51d9e-0285-4022-81c5-7f14955315d0"
} else {
  formUUID = "eeae34c5-de07-4e1a-8402-602f158ca0a1"
}


module.exports.data = axios.get(`${current}/api/forms/${formUUID}`)
  .then(response => {
    let form = response.data
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

