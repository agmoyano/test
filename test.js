var test = require('tape');
var request = require('supertest');
var app = require('./index');

test('/test', function(t) {
  request(app)
    .get('/test')
    .expect(200)
    .end(function(err, res) {
      if(err) return t.end(err);
      t.equal(res.text, 'hola', 'La respuesta debe ser igual a "hola"');
      t.end();
    });
});

test('/test2', function(t) {
  request(app)
    .get('/test2')
    .expect(200)
    .end(function(err, res) {
      if(err) return t.end(err);
      t.equal(res.text, 'hola!!!', 'La respuesta debe ser igual a "hola"');
      t.end();
    });
});

test('/test4', function(t) {
  request(app)
    .get('/test4')
    .expect(200)
    .end(function(err, res) {
      if(err) return t.end(err);
      t.equal(res.text, 'holis', 'La respuesta debe ser igual a "hola"');
      t.end();
    });
});
