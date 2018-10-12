/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc API Controllers
 */

const clique = require('./../clique/index')

module.exports = {
  health: (req, res) => {
    res.status(200).json({
      'success': true,
      'data': 'healthy'
    })
  },
  addSealer: (req, res) => {
    let address = req.body.address
    clique.propose(address)
      .then((out) => {
        // @todo sanitize out
        res.status(200).json({
          'success': true,
          'data': out
        })
      })
      .catch((err) => {
        res.status(200).json({
          'success': false,
          'data': '',
          'error': err
        })
      })
  },
  proposals: (req, res) => {
    clique.proposals()
      .then((out) => {
        // @todo sanitize out
        res.status(200).json({
          'success': true,
          'data': out
        })
      })
      .catch((err) => {
        res.status(200).json({
          'success': false,
          'data': '',
          'error': err
        })
      })
  }
}
