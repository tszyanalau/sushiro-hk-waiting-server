const express = require('express');
const config = require('config');
const { version } = require('../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    status: 'OK',
    data: {
      version,
      config: {
        environment: process.env.NODE_ENV || 'default',
        mockData: config.get('mockData'),
      },
    },
  });
});

module.exports = router;
