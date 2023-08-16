const fetch = require('node-fetch');
const config = require('config');
const storeData = require('../data/stores');

const url = `${config.get('sushiroApi.baseUrl')}/info/storelist`;

const getStoreList = async () => {
  if (config.get('mockData')) {
    return storeData;
  }
  const response = await fetch(url);
  const stores = await response.json();
  return stores;
};

module.exports = getStoreList;
