const express = require('express');
const config = require('config');
const { validationResult, header, oneOf } = require('express-validator');
const cors = require('cors');
const UnauthorizedError = require('./models/UnauthorizedError');

module.exports = [
  express.json(),
  cors({ origin: '*' }),
  oneOf([
    header('origin').isIn(config.get('api.whitelist')),
    header('x-api-key').equals(process.env.API_KEY),
  ]),
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next();
    } else {
      logger.error(JSON.stringify(errors.array()));
      throw new UnauthorizedError('Not allowed');
    }
  },
];
