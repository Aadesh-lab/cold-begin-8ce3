const asyncHandler = require('../utils/asyncHandler');

/**
 * @desc    Get hello message
 * @route   GET /api/hello
 * @access  Public
 */
const getHelloMessage = asyncHandler(async (req, res) => {
  const message = {
    success: true,
    message: 'Hello from Express API!',
    timestamp: new Date().toISOString(),
    data: {
      greeting: 'Hello, World!',
      status: 'active',
      version: '1.0.0'
    }
  };

  res.status(200).json(message);
});

module.exports = {
  getHelloMessage
};