const express = require('express');
const router = express.Router();
const auth = require('../../controllers/authController');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/', auth.loginUser);
router.post('/', authMiddleware.authenticate, auth.postUser);

module.exports = router;