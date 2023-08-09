const _ = require('lodash');
const { validationResult } = require('express-validator');

const getStoreList = require('./api/getStoreList');

exports.fetchStoresHandler = async (req, res, next) => {
  const stores = await getStoreList();
  _.set(req, 'body.stores', stores);
  next();
};

exports.validate = (validations) => async (req, res, next) => {
  for (let i = 0; i < validations.length; i++) {
    const validation = validations[i];
    const result = await validation.run(req);
    if (result.errors.length) break;
  }
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    logger.error(JSON.stringify(errors.array()));
    res.status(400).send({ errors: errors.array() });
  }
};

exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  logger.error(JSON.stringify(err.stack));
  res.status(err.statusCode || 500).send({ errors: [err.message] });
};
