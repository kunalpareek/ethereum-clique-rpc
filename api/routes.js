/**
 * @author Kunal Pareek (kunalp@outlook.in)
 * @desc API Routes
 */

const express = require('express');
const router = express.Router();

const Controller = require('./controller');

/**
 * Health Check
 * Request type - GET
 * request - {}
 * response - {}
 */
router.get('/health', Controller.health);



module.exports = router;