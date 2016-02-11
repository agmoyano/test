var test = require('tape');
var request = require('supertest');
var app = require('./index');

test('/test', function(t) {
  request(app)
    .get('/test')
    .expect(200)
    .expect('hola1', t.end);
});

test('/test2', function(t) {
  request(app)
    .get('/test2')
    .expect(200)
    .expect('hola', t.end);
});
