const loadEnvironmentVariable = (envName) => {
  if (process.env[envName]) {
    return process.env[envName];
  }

  throw new Error(`${envName} environment variable does not exist`);
};

module.exports = {
  database_url: loadEnvironmentVariable('POSTGRES_URI'),
};
