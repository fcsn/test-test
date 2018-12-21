const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

app.listen('4000', () => {
    console.log('listening 4000');
})