const sensible = require('fastify-sensible');
const fp = require('fastify-plugin');

module.exports = fp((fastify, options, next) => {
  fastify.register(sensible);
  next();
});
