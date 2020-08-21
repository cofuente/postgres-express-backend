
var axios = require('axios');

const current = process.env.NODE !== '/app/.heroku/node/bin/node' ? 'http://localhost:1337' : 'https://postgress-express-backend.herokuapp.com'

const options = {
  headers: {
      'Content-Type': 'application/json',
  }
};

module.exports = (data) => {
  let submission = {}
  let uuid = Object.keys(data)
  let values = Object.values(data)

  submission["formUUID"] = values[0]
  submission["answers"] = []

  for ( var i = 1; i <= uuid.length-1; i++ ) {
    let answerObject = {}

    answerObject["questionUUID"] = uuid[i]
    answerObject["value"] = values[i]
    submission["answers"].push(answerObject)
  }
  
  submitData.axiosPost(JSON.stringify(submission))
}

const submitData = {
  axiosPost: function(formattedSubmission){
    axios.post(`${current}/api/submissions`, formattedSubmission, options)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch(error => {
      console.error(error)
    })
  }
}