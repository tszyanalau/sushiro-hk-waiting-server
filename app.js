const express = require('express');

require('dotenv').config();

const router = require('./router');
const { errorHandler } = require('./handlers');
const middlewares = require('./middlewares');
require('./logger');

const app = express();

app.use('/api', middlewares, router);

// error handler
app.use(errorHandler);

module.exports = app;
