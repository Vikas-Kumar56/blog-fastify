const DbMigrate = require('db-migrate');

const runMigration = () =>
  new Promise((resolve, reject) => {
    console.log(JSON.stringify(process.env));
    const dbMigrate = DbMigrate.getInstance(true);
    dbMigrate.silence(true);

    dbMigrate.up((error, result = []) => {
      if (error) {
        reject(error);
      }

      resolve(result.length);
    });
  });

module.exports = runMigration;
