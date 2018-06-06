const Koa = require('koa');
const { routes } = require('./resources');
const middleware = require('./middleware');

const init = async (app) => {
  // Add middleware and routes to app
  [...middleware, ...routes].forEach(fn => app.use(fn()));
  console.log('Middleware and routes initialized');

  // Initialize app
  await app.listen(3000);
  console.log('Server running at: 3000');
};

const app = new Koa();

init(app);
