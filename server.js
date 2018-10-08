/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc Node API Server
 */

const app = require('./app')
const config = require('./config/config')
const http = require('http')
const winston = require('./logger/index')

const server = http.createServer(app)

server.listen(config.port, (err) => {
  if (err) {
    winston.log('error', 'Server error', { 'message': err })
  } else {
    winston.log('info', 'server running at  ' + config.port)
  }
})
