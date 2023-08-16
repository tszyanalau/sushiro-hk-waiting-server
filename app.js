const express = require('express');
const swaggerUI = require('swagger-ui-express');

require('dotenv').config();

const router = require('./router');
const { errorHandler } = require('./handlers');
const middlewares = require('./middlewares');
const swagger = require('./swagger');
require('./logger');

const app = express();

// Serve Swagger UI
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swagger));

app.use('/api', middlewares, router);

// error handler
app.use(errorHandler);

module.exports = app;
