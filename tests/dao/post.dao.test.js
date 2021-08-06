const Fastify = require('fastify');
const postDao = require('../../src/DAL/post.dao');
const dbPlugin = require('../../src/plugin/database');

let app;
describe('post repository', () => {
  beforeAll(async () => {
    app = Fastify();
    app.register(dbPlugin);

    await app.ready();
  });

  beforeEach(async () => {
    await app.db.query('DELETE FROM blog');
  });

  it('should return post', async () => {
    const title = 'some title';
    const body = 'some body';
    const { id } = await app.db.one(
      'INSERT INTO blog(title, body) VALUES($1, $2) RETURNING id',
      [title, body]
    );

    const { getAllPostFromDb } = postDao(app.db);

    const post = await getAllPostFromDb();
    expect(post[0].id).toEqual(id);
  });
});
