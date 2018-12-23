const Router = require('koa-router');
const products = require('./products');
const rankings = require('./rankings');

const api = new Router();

api.use('/products', products.routes());
api.use('/rankings', rankings.routes());

module.exports = api;
