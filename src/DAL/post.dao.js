const PostDao = (db) => {
  const getAllPostFromDb = () => db.query('select * from blog');

  return { getAllPostFromDb };
};

module.exports = PostDao;
