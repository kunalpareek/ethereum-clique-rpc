/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc Application Config
 */

let env = process.env.NODE_ENV || 'development'
const logger = require('./../logger/index')

const config = {
  'development': {
    'port': process.env.PORT || '3000'
  },
  'production': {
    'port': process.env.PORT
  }
}

if (config[env].port === undefined) {
  let errorMessage = 'port not found in enviroment'
  logger.log('error', 'Config error', { 'message': errorMessage })
  throw new Error(errorMessage)
}

module.exports = config[env]
