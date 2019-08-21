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

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
