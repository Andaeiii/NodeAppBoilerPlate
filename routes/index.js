const express = require('express');
const router = express.Router();
const index = require('../controllers/IndexController');


router.get('/', index.initPage);

module.exports = router;