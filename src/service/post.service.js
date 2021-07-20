const PostDao = require('../DAL/post.dao');

const postService = (fastify) => {
  const { getAllPostFromDb } = PostDao(fastify.db);
  const getAllPost = () => getAllPostFromDb();

  return { getAllPost };
};

module.exports = postService;
