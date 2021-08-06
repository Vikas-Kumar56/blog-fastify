const fastify = require('fastify');

// plugins
const databasePlugin = require('./plugin/database');
const swaggerPlugin = require('./plugin/swagger');
const sensiblePlugin = require('./plugin/sensible');

// routes
const blogRoutes = require('./routes/blog');
const userRoutes = require('./routes/user');

const build = (opts = {}) => {
  const app = fastify(opts);
  // register plugins
  app.register(databasePlugin);
  app.register(swaggerPlugin);
  app.register(sensiblePlugin);

  // register
  app.register(blogRoutes, { prefix: '/api/v1/blogs' });
  app.register(userRoutes, { prefix: '/api/v1/users' });

  app.get('/', async (request, reply) => {
    reply.send({ hello: 'the world  updated - 3 CI' });
  });

  return app;
};

module.exports = build;
