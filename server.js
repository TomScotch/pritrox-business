// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/pritrox.html');
});
app.get('/index', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/home', function(request, response) {
  response.sendFile(__dirname + '/views/home.html');
});
app.get('/julian', function(request, response) {
  response.sendFile(__dirname + '/views/julian.html');
});
app.get('/software', function(request, response) {
  response.sendFile(__dirname + '/views/software-engineering.html');
});
app.get('/system', function(request, response) {
  response.sendFile(__dirname + '/views/system-integration.html');
});
app.get('/webstores', function(request, response) {
  response.sendFile(__dirname + '/views/webstores.html');
});
app.get('/business', function(request, response) {
  response.sendFile(__dirname + '/views/business.html');
});
app.get('/ideas', function(request, response) {
  response.sendFile(__dirname + '/views/ideas.html');
});
app.get('/carousel', function(request, response) {
  response.sendFile(__dirname + '/views/carousel.html');
});
app.get('/about-us', function(request, response) {
  response.sendFile(__dirname + '/views/about-us.html');
});
app.get('/blog-post', function(request, response) {
  response.sendFile(__dirname + '/views/blog-post.html');
});
app.get('/blog', function(request, response) {
  response.sendFile(__dirname + '/views/blog.html');
});
app.get('/contact-us', function(request, response) {
  response.sendFile(__dirname + '/views/contact-us.html');
});
app.get('/full-width', function(request, response) {
  response.sendFile(__dirname + '/views/full-width.html');
});
app.get('/portfolio-item', function(request, response) {
  response.sendFile(__dirname + '/views/portfolio-item.html');
});
app.get('/portfolio', function(request, response) {
  response.sendFile(__dirname + '/views/portfolio.html');
});
app.get('/services', function(request, response) {
  response.sendFile(__dirname + '/views/services.html');
});
app.get('/pritrox', function(request, response) {
  response.sendFile(__dirname + '/views/pritrox.html');
});
app.get('/header', function(request, response) {
  response.sendFile(__dirname + '/views/header.html');
});
app.get('/footer', function(request, response) {
  response.sendFile(__dirname + '/views/footer.html');
});
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
