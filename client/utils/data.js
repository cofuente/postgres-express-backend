var axios = require('axios');

module.exports.data = axios.get('https://postgress-express-backend.herokuapp.com/api/questions')
  .then(response => {
    let form = response.data
    console.log("The frontend has loaded data from the API");
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

