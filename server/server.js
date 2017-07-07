var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = 5010;
// var jokeBook = require('./routes/jokes.js');

app.use(bodyParser.urlencoded({extended: true}));

// app.use('/jokes', jokesRoute);

// Serve back static files by default
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});
