require( 'svelte/ssr/register' );
const koa = require('koa');
const route = require('koa-route');
const fs = require('fs');
const app = require('../src/App');

const server = koa();
const data = { weeks: [] }
const html = app.render(data);
console.log(html);
const { css, components } = app.renderCss();

fs.writeFile('app.css', css, function(err) {
  if(err) {
    throw new Error(err);
  }
  console.log('Generated CSS to file system');
});


server.use(route.get('/', function *(){
  this.body = html;
}));

server.listen(3000);
