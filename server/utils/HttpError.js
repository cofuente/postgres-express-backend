'use strict'

var http = require('http')

function HttpError (status, message) {
  var err = new Error(message || http.STATUS_CODES[status])
  err.status = status
  Object.setPrototypeOf(err, HttpError.prototype)
  return err
}

Object.setPrototypeOf(HttpError.prototype, Error.prototype)

HttpError.prototype.middleware = function () {
  return (req, res, next) => {
    next(this)
  }
}

module.exports = HttpError