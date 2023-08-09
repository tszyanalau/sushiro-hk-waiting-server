class Api {
  logger(args) {
    logger.log({ ...args, label: this.constructor.name });
  }
}

module.exports = Api;
