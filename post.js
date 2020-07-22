var axios = require('axios');

axios.post('https://postgress-express-backend.herokuapp.com/api/submissions', {
  data: data
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});