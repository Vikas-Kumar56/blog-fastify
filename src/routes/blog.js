const postService = require('../service/post.service');

const opts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          required: ['id'],
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            body: { type: 'string' },
            created_at: { type: 'string' },
            updated_at: { type: 'string' },
          },
        },
      },
    },
  },
};

const postRoutes = async (fastify) => {
  const { getAllPost } = postService(fastify);

  fastify.get('/', opts, getAllPost);

  fastify.post('/', async (request, reply) => {
    fastify.log.info(`request with body ${request}`);
    const { title, body } = request.body;
    const blogId = await fastify.db.one(
      'INSERT INTO blog(title, body) VALUES($1, $2) RETURNING id',
      [title, body]
    );

    reply.code(201).send(blogId);
  });
};

module.exports = postRoutes;
