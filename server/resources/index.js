const Router = require('koa-router');
const { getDirectories } = require('../lib/dirs');

const resources = getDirectories(__dirname).map((resourcePath) => {
  const resourceName = resourcePath.split('/').pop();

  return {
    name: resourceName,
    tests: require(`${resourcePath}/${resourceName}.tests`),
    schema: require(`${resourcePath}/${resourceName}.schema`),
    routes: require(`${resourcePath}/${resourceName}.routes`),
    controller: require(`${resourcePath}/${resourceName}.controller`),
  };
});

const routes = resources.map(resource => resource.routes);
const models = resources.map(resource => resource.models);
const tests = resources.map(resource => resource.tests);

const routers = resources.map((resource) => {
  const router = new Router();

  router.prefix(`/${resource.name}`);

  resource.routes.forEach((route) => {
    const { method, path, handler } = route;
    router[method.toLowerCase()](path, resource.controller[handler]);
  });

  return router.routes.bind(router);
});

module.exports = {
  resources,
  routers,
  routes,
  models,
  tests,
};
