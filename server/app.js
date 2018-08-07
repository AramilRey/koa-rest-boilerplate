const Koa = require('koa');
const config = require('../config');
const mongoose = require('mongoose');
const { resources, routers } = require('./resources');
const middleware = require('./middleware');

const initDB = async () => {
  // Connect to db
  const dbConf = config.get('db');
  const dbPath = `mongodb://${dbConf.user}:${dbConf.pass}@${dbConf.host}/${dbConf.name}`;
  await mongoose.connect(dbPath).then(() => {
    console.log('Connected to DB');
  }).catch((err) => {
    console.log('Error connectiong to DB');
    console.log(err);
  });

  // Initialize mongoose models
  resources.forEach(resource => mongoose.model(resource.name, resource.schema));
};

const init = async (app) => {
  await initDB();

  // Add middleware and routes to app
  [...middleware, ...routers].forEach(fn => app.use(fn()));
  console.log('Middleware and routes initialized');

  // Initialize app
  await app.listen(config.get('port'));
  console.log(`Server running at port ${config.get('port')}`);
};

const app = new Koa();
init(app);
