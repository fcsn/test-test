require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

const Router = require('koa-router');
const router = new Router();

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI
} = process.env;

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {useNewUrlParser: true}).then(() => {
    console.log('connected to mongodb');
}).catch(e => console.error(e));

const api = require('./api');

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})