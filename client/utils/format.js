module.exports = (data) => {
  let submission = {}
  let uuid = Object.keys(data)
  let values = Object.values(data)

  submission["formUUID"] = "GETFORMUUID"
  submission["answers"] = []

  for ( var i = 1; i <= uuid.length; i++ ) {
    let mergedSelections = []
    if uuid[i] === uuid[i-1] {
      let addComma = values[i-1] + ", "
      addComma.concat(values[i])
    }

  }

  for ( var i = 1; i <= uuid.length; i++ ) {
    let answerObject = {}

    answerObject["questionUUID"] = uuid[i]
    answerObject["value"] = values[i]

    submission["answers"].push(answerObject)
  }



  return submission;

}
