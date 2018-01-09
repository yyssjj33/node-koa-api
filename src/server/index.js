const Koa = require('koa');
const app = new Koa();
const indexRouters = require('./routers/index');

app.use(indexRouters.routes());

module.exports = app.listen(3000);