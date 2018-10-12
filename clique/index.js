/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc Clique functions
 *
 *command to add new sealer
 * geth --exec "clique.propose('0x40dfb82d64731f7d047a106c26f4e93ec7d9a714', true)" attach ipc:/home/kunal/Projects/Personal/quillnet/n1/geth.ipc
 * command to list all proposals
 * geth --exec "clique.proposals" attach ipc:/home/kunal/Projects/Personal/quillnet/n1/geth.ipc
 * command to add new sealer
 */

const bluebird = require('bluebird')
const { exec } = require('child_process')
const logger = require('./../logger/index')
const config = require('./../config/config')

let buildAddSealerCommand = (address) => {
  let prefix = `geth --exec "`
  let cliqueCmd = `clique.propose('` + address + `', true)`
  let suffix = `" attach ipc:` + config.ipcPath
  return prefix + cliqueCmd + suffix
}

let buildProposalsCommand = () => {
  return `geth --exec "clique.proposals" attach ipc:` + config.ipcPath
}

module.exports = {
  propose: (address) => {
    return new bluebird.Promise((resolve, reject) => {
      let cmd = buildAddSealerCommand(address)
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          // console.error(`exec error: ${err}`);
          logger.log('error', 'Exec error', { 'message': err })
          reject(err)
        }
        // console.log(`Number of files ${stdout}`);
        logger.log('info', 'proposal added', { 'message': stdout })
        resolve(stdout)
      })
    })
  },
  proposals: () => {
    return new bluebird.Promise((resolve, reject) => {
      let cmd = buildProposalsCommand()
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          // console.error(`exec error: ${err}`);
          logger.log('error', 'Exec error', { 'message': err })
          reject(err)
        }
        // console.log(`Number of files ${stdout}`);
        logger.log('info', 'proposal added', { 'message': stdout })
        resolve(stdout)
      })
    })
  }
}
