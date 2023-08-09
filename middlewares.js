const express = require('express');
const config = require('config');
const _ = require('lodash');
const cors = require('cors');
const UnauthorizedError = require('./models/UnauthorizedError');

module.exports = [
  express.json(),
  cors({ origin: '*' }),
  (req, res, next) => {
    if ((req.headers.origin && _.some(config.get('apiWhitelist'), (path) => path.match(req.headers.origin))) || _.get(req, 'headers.x-api-key') === process.env.API_KEY) {
      next();
    } else {
      throw new UnauthorizedError('Not allowed');
    }
  },
];
