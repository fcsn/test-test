const Router = require('koa-router');
const api = new Router();

api.get('/goods', ctx => {
    ctx.body = 'goods들';
})

module.exports = api;
