const Router = require('koa-router');
const rankingsCtrl = require('./rankings.ctrl');

const rankings = new Router();

rankings.get('/', rankingsCtrl.list);
rankings.post('/', rankingsCtrl.write);
rankings.delete('/:id', rankingsCtrl.remove);

module.exports = rankings;