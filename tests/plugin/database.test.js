const Fastify = require('fastify');
const dbPlugin = require('../../src/plugin/database');
const runMigration = require('../../src/plugin/migration');

jest.mock('../../src/plugin/migration');

describe('should contain db plugin', () => {
  beforeAll(() => {
    runMigration.mockImplementation(() => jest.fn());
  });
  it('db plugin should present', async () => {
    const fastify = Fastify();

    fastify.register(dbPlugin);

    await fastify.ready();

    expect(fastify.db).toBeDefined();

    await fastify.close();
  });
});
