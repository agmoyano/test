var test = require('tape');
var request = require('request');
test(function(t) {
  request('http://localhost:8081/test', function(error, header, body) {
    t.equals('hola', body);
    t.end();
  });
});
