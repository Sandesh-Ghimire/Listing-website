const express = require('express');
const { sendPrivateGuidanceEmail } = require('../controllers/emailController');

const router = express.Router();

// POST route for sending guidance request
router.post('/request-guidance', sendPrivateGuidanceEmail);

module.exports = router;
