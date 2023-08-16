const express = require('express');

const router = express.Router();

router.use('/healthCheck', require('./healthCheck'));

router.use('/store', require('./store'));

module.exports = router;
