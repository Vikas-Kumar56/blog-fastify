const userService = (fastify) => {
  const getUserById = async (userId) => {
    try {
      const user = await fastify.db.one('select * from users where id=$1', [
        userId,
      ]);
      return user;
    } catch (error) {
      throw new Error(`${userId} does not exist`);
    }
  };

  return { getUserById };
};

module.exports = userService;
