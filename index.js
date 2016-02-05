var express = require('express'),
    app = express();

app.get('/test', function(req, res, next) {
  res.send('hola');
});

app.get('/test2', function(req, res, next) {
  res.send('hola!!!');
});

app.listen(8081);
