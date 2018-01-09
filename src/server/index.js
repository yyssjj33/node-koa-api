const Koa = require('koa');
const BodyParser = require('koa-bodyparser');

const app = new Koa();
const PORT = process.env.PORT || 1337;
const indexRouters = require('./routers/index');
const movieRouters = require('./routers/movies');

app.use(BodyParser());
app.use(indexRouters.routes());
app.use(movieRouters.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;