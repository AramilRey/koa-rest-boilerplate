module.exports = [{
  method: 'GET',
  path: '/',
  handler: 'list',
}, {
  method: 'GET',
  path: '/:id',
  handler: 'find',
}, {
  method: 'POST',
  path: '/',
  handler: 'create',
}, {
  method: 'POST',
  path: '/:id',
  handler: 'edit',
}, {
  method: 'DELETE',
  path: '/:id',
  handler: 'remove',
}];
