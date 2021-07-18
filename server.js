const PORT = process.env.PORT || 5000;

const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

const start = async () => {
  try {
    // fastify not able to send response outside docker w/o 0.0.0.0
    await server.listen(PORT, '0.0.0.0');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
