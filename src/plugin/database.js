const fastifyPlugin = require('fastify-plugin');
const pgp = require('pg-promise')();
// const runMigration = require('./migration');

const config = require('../config');

const dbPlugin = async (fastify, options, next) => {
  const db = pgp(config.database_url);
  // register db as decorator to provide globally
  fastify.decorate('db', db);

  // fastify.log.info(`Migration about to run`);
  // const migrationCount = await runMigration();
  // fastify.log.info(
  //   `Migration applied and affected record count:${migrationCount}`
  // );
  next();
};

module.exports = fastifyPlugin(dbPlugin);
