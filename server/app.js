const Koa = require('koa');
const config = require('../config');
const mongoose = require('mongoose');
const { routes } = require('./resources');
const middleware = require('./middleware');

const init = async (app) => {
  // Connect to db
  const dbConf = config.get('db');
  const dbPath = `mongodb+srv://${dbConf.user}:${dbConf.pass}@${dbConf.host}/${dbConf.name}`;
  mongoose.connect(dbPath);

  // Add middleware and routes to app
  [...middleware, ...routes].forEach(fn => app.use(fn()));
  console.log('Middleware and routes initialized');

  // Initialize app
  await app.listen(config.get('port'));
  console.log(`Server running at: ${config.get('port')}`);
};

const app = new Koa();

init(app);
