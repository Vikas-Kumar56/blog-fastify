const userService = require('../service/user.service');
// should be async
const route = async (fastify) => {
  const { getUserById } = userService(fastify);

  fastify.get('/:userId', async (request, reply) => {
    const { userId } = request.params;
    const [error, user] = await fastify.to(getUserById(userId));

    if (error) {
      throw fastify.httpErrors.notFound(error.message);
    }

    reply.code(200).send(user);
  });

  fastify.post('/', async (request, reply) => {
    fastify.log.info(`request with body ${request}`);
    const { firstName, lastName, password, email } = request.body;
    const { id } = await fastify.db.one(
      'INSERT INTO users(first_name, last_name, password, email) VALUES($1, $2, $3, $4) RETURNING id',
      [firstName, lastName, password, email]
    );

    reply.code(201).send({
      userId: id,
    });
  });
};

module.exports = route;
