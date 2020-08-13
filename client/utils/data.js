var axios = require('axios');
const chalkAnimation = require('chalk-animation')

module.exports.data = axios.get('https://postgress-express-backend.herokuapp.com/api/questions')
  .then(response => {
    let form = response.data
    setTimeout(() => chalkAnimation.rainbow("The frontend has successfully loaded data from the API"), 4000)
    return form
  })
  .catch(error => {
    console.log(error);
    return error
  });

