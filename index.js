var express = require('express'),
    app = express();

app.get('/test', function(req, res, next) {
  res.send('hola');
});

app.get('/test2', function(req, res, next) {
  res.send('hola!!!');
});

app.get('/test4', function(req, res, next){
  res.send('holis');
})

module.exports = app;

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV != 'ci-testing') app.listen(8081);
