const express = require('express');
const { getHelloMessage } = require('../controllers/helloController');

const router = express.Router();

// @route   GET /api/hello
// @desc    Get hello message
// @access  Public
router.get('/', getHelloMessage);

module.exports = router;