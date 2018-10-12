/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc Application Config
 */

let env = process.env.NODE_ENV || 'development'
const logger = require('./../logger/index')

const config = {
  'development': {
    'port': process.env.PORT || '3000',
    'ipcPath': '/home/kunal/Projects/Personal/quillnet/n1/geth.ipc'
  },
  'production': {
    'port': process.env.PORT,
    'ipcPath': process.env.IPC_PATH
  }
}

if (config[env].port === undefined) {
  let errorMessage = 'port not found in enviroment'
  logger.log('error', 'Config error', { 'message': errorMessage })
  throw new Error(errorMessage)
}

if (config[env].ipcPath === undefined) {
  let errorMessage = 'ipc not found in enviroment'
  logger.log('error', 'Config error', { 'message': errorMessage })
  throw new Error(errorMessage)
}

module.exports = config[env]
