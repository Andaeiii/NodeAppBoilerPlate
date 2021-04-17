const express = require('express');
const router = express.Router();
const stocks = require('../../controllers/stocksController');


router.get('/', stocks.calcRoi);// authToken.authenticate,

module.exports = router;