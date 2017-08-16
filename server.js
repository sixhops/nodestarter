var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
  //res.sendFile('index.html');

  res.sendFile(path.join(__dirname, '/app', 'index.html'));
});

app.get('/css/style.css', function(req, res) {
  //res.sendFile('/css/style.css');
  res.sendFile(path.join(__dirname, '/app/css', 'style.css'));
});
app.get('/js/main.js', function(req, res) {
  //res.sendFile('/js/main.js');
  res.sendFile(path.join(__dirname, '/app/js', 'main.js'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
