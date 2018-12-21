const Router = require('koa-router');
const productsCtrl = require('./products.ctrl');

const products = new Router();

products.get('/', productsCtrl.list);
products.post('/', productsCtrl.write);
products.delete('/:id', productsCtrl.remove);


module.exports = products;