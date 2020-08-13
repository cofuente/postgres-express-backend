var axios = require('axios');

module.exports.data = axios.get('https://postgress-express-backend.herokuapp.com/api/forms/eeae34c5-de07-4e1a-8402-602f158ca0a1')
  .then(response => {
    let form = response.data
    console.log("The API has loaded");
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

