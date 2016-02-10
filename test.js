var test = require('tape');
var request = require('request');
test(function(t) {
  request('http://localhost:8081/test', function(error, header, body) {
    t.equals(body, 'hola');
    request('http://localhost:8081/test2', function(error, header, body) {
      t.equals(body, 'hola');
      t.end();
    });
  });

});
