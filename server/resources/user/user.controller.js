const db = require('mongoose');

const list = (ctx, next) => {
  ctx.body = 'List!';
};

const find = (ctx, next) => {
  ctx.body = 'Find!';
};

const create = (ctx, next) => next();
const edit = (ctx, next) => next();
const remove = (ctx, next) => next();

module.exports = {
  list,
  find,
  create,
  edit,
  remove,
};
