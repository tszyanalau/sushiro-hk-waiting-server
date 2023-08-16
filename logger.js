const { createLogger, format, transports } = require('winston');
const config = require('config');

const { combine, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => `${timestamp} ${level.toUpperCase()} - ${label ? `[${label}] ` : ''}${message}`);

const logger = createLogger({
  level: config.get('loggerLevel'),
  format: combine(
    format.timestamp(),
    logFormat,
  ),
  transports: [
    new transports.Console(),
  ],
});

logger.info('logger created');

global.logger = logger;

module.exports = logger;
