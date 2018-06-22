// Load .env file
require('dotenv').config();

const convict = require('convict');
const schema = require('./schema.js');

const config = convict(schema);

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = config;
