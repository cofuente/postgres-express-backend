const morgan = require('morgan')
const chalk = require('chalk')

const statusColor = (statusCode) => {
  const status = statusCode.toString()[0]
  switch (status) {
    case '5': 
      return chalk.red(statusCode)
    case '4': 
      return chalk.yellow(statusCode)
    case '3': 
      return chalk.cyan(statusCode)
    case '2': 
      return chalk.green(statusCode)
    default:
      return statusCode
  }
}

const methodColor = (method) => {
  switch (method) {
    case 'GET': 
      return chalk.black.bgGreenBright(` ${method} `)
    case 'POST': 
      return chalk.black.bgBlueBright(` ${method} `)
    case 'PUT': 
      return chalk.black.bgYellowBright(` ${method} `)
    case 'DELETE': 
      return chalk.black.bgMagentaBright(` ${method} `)
    default:
      return chalk.white.bgBlack(` ${method} `)
  }
}


const format = (tokens, req, res) =>{
  return [
    `HTTPv${tokens['http-version'](req, res)}`,
    methodColor(tokens.method(req, res)),
    tokens.url(req, res),
    statusColor(tokens.status(req, res)),
    tokens['referrer'](req, res),
    tokens['remote-addr'](req, res),
    tokens['remote-user'](req, res),
    tokens['user-agent'](req, res),
  ].join(' ')
}

const logger = morgan(format)

module.exports = logger