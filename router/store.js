const express = require('express');
const { body } = require('express-validator');
const _ = require('lodash');

const { fetchStoresHandler, validate } = require('../handlers');

const router = express.Router();

router.get(
  '/',
  fetchStoresHandler,
  validate([body('stores').notEmpty().isArray({ min: 0 }).withMessage('No stores found')]),
  (req, res) => {
    const stores = _.map(req.body.stores, (data) => {
      const store = _.pick(data, ['id', 'name', 'address', 'area', 'region', 'latitude', 'longitude', 'waitingGroup']);
      _.set(store, 'open', data.storeStatus === 'OPEN');
      _.set(store, 'localTicketing', data.localTicketingStatus === 'ON');
      return store;
    });

    res.status(200).send({ data: stores, timestamp: new Date().getTime() });
  },
);

module.exports = router;
