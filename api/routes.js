/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc API Routes
 */

const express = require('express')
const router = express.Router()

const Controller = require('./controller')

/**
 * Health Check
 * Request type - GET
 * request - {}
 * response - {
      'success': true,
      'data': 'healthy'
    }
 */
router.get('/health', Controller.health)

/**
 * Add Sealer
 * Request type - POST
 * request - {
 *    'address': '0x40dfb82d64731f7d047a106c26f4e93ec7d9a714'
 * }
 * response - {
      'success': true,
      'data': ''
    }
 */
router.post('/addSealer', Controller.addSealer)

/**
 * Get Proposals
 * Request type - GET
 * request - {}
 * response - {
      'success': true,
      'data': {
        '0x40dfb82d64731f7d047a106c26f4e93ec7d9a714': true,
        '0x40dfb82d64731f7d047a106c26f4e93ec7d9a714': false
      }
    }
 */
router.get('/proposals', Controller.proposals)

module.exports = router
