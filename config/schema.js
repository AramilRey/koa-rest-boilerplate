// Define a schema
const configSchema = {
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT',
    arg: 'port',
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: String,
      default: 'koa2boilerplate.mongodb.net',
      env: 'DB_HOST',
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'koa2boilerplate',
      env: 'DB_NAME',
    },
    user: {
      doc: 'Database user',
      format: String,
      default: 'koa2boilerplate',
      env: 'DB_USER',
    },
    pass: {
      doc: 'Database password',
      format: String,
      default: '',
      env: 'DB_PASS',
    },
  },
  jwt: {
    pass: {
      doc: 'Database password',
      format: String,
      default: '53CR37',
      env: 'JWT_KEY',
    },
  },
};

module.exports = configSchema;
