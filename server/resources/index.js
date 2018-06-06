const Router = require('koa-router');
const { getDirectories } = require('../lib/dirs');

const resourcesPaths = getDirectories(__dirname);
const resources = resourcesPaths.reduce((r, resourcePath) => {
  const resourceName = resourcePath.split('/').pop();

  r.push({
    controller: require(`${resourcePath}/${resourceName}.controller`),
    routes: require(`${resourcePath}/${resourceName}.routes`),
    tests: require(`${resourcePath}/${resourceName}.tests`),
    model: require(`${resourcePath}/${resourceName}.model`),
  });

  return r;
}, []);


const routes = [];
const models = [];
const tests = [];

resources.forEach((resource) => {
  const router = new Router();

  resource.routes.forEach((route) => {
    const { method, path, handler } = route;
    router[method.toLowerCase()](path, resource.controller[handler]);
  });

  routes.push(router.routes.bind(router));
  models.push(resources.model);
  tests.push(resources.test);
});

module.exports = {
  default: resources,
  routes,
  models,
  tests,
};
