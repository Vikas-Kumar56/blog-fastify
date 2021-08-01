const fastify = require('fastify');

// plugins
const databasePlugin = require('./plugin/database');
const swaggerPlugin = require('./plugin/swagger');

// routes
const blogRoutes = require('./routes/blog');

const build = (opts = {}) => {
  const app = fastify(opts);
  // register plugins
  app.register(databasePlugin);
  app.register(swaggerPlugin);

  // register
  app.register(blogRoutes, { prefix: '/api/v1/blogs' });

  app.get('/', async (request, reply) => {
    reply.send({ hello: 'the world' });
  });

  return app;
};

module.exports = build;
