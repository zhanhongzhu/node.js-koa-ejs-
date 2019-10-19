const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const koaRouter = require('koa-router');

const path = require('path');
const render = require('koa-ejs');


const router = new koaRouter();
app.use(json())
// 对于任何请求，app 将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// 配置路由
// router.get('/test',ctx=>(ctx.body="hello world"))


// 配置模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
})
// 模拟数据
const things = [{ name: 'apple' }, { name: 'banana' }, { name: 'orange' }];

// 路由跳转
router.get("/", index)
router.get('/add', showAdd)

// 函数声明
async function index(ctx) {
  await ctx.render('index', {
    title: 'this is index2',
    things: things
  })
}
async function showAdd(ctx) {
  await ctx.render('add', {
    title: 'this is index211',
  })
}

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('server started'));
